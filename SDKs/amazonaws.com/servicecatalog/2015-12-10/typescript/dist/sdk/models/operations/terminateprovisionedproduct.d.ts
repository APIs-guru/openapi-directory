import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum TerminateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceTerminateProvisionedProduct = "AWS242ServiceCatalogService.TerminateProvisionedProduct"
}
export declare class TerminateProvisionedProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: TerminateProvisionedProductXAmzTargetEnum;
}
export declare class TerminateProvisionedProductRequest extends SpeakeasyBase {
    headers: TerminateProvisionedProductHeaders;
    request: shared.TerminateProvisionedProductInput;
}
export declare class TerminateProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    resourceNotFoundException?: any;
    statusCode: number;
    terminateProvisionedProductOutput?: shared.TerminateProvisionedProductOutput;
}
