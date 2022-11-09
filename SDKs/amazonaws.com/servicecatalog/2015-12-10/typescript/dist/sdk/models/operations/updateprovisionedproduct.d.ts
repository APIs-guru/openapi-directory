import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateProvisionedProductXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisionedProduct = "AWS242ServiceCatalogService.UpdateProvisionedProduct"
}
export declare class UpdateProvisionedProductHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProvisionedProductXAmzTargetEnum;
}
export declare class UpdateProvisionedProductRequest extends SpeakeasyBase {
    headers: UpdateProvisionedProductHeaders;
    request: shared.UpdateProvisionedProductInput;
}
export declare class UpdateProvisionedProductResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateProvisionedProductOutput?: shared.UpdateProvisionedProductOutput;
}
