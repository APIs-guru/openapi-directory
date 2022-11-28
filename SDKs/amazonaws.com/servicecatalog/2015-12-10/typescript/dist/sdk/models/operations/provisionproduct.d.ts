import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ProvisionProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceProvisionProduct = "AWS242ServiceCatalogService.ProvisionProduct"
}
export declare class ProvisionProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ProvisionProductXAmzTargetEnum;
}
export declare class ProvisionProductRequest extends SpeakeasyBase {
    headers: ProvisionProductHeaders;
    request: shared.ProvisionProductInput;
}
export declare class ProvisionProductResponse extends SpeakeasyBase {
    contentType: string;
    duplicateResourceException?: any;
    invalidParametersException?: any;
    provisionProductOutput?: shared.ProvisionProductOutput;
    resourceNotFoundException?: any;
    statusCode: number;
}
