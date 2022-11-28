import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ScanProvisionedProductsXAmzTargetEnum {
    Aws242ServiceCatalogServiceScanProvisionedProducts = "AWS242ServiceCatalogService.ScanProvisionedProducts"
}
export declare class ScanProvisionedProductsHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ScanProvisionedProductsXAmzTargetEnum;
}
export declare class ScanProvisionedProductsRequest extends SpeakeasyBase {
    headers: ScanProvisionedProductsHeaders;
    request: shared.ScanProvisionedProductsInput;
}
export declare class ScanProvisionedProductsResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    scanProvisionedProductsOutput?: shared.ScanProvisionedProductsOutput;
    statusCode: number;
}
