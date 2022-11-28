import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateProvisionedProductPropertiesXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateProvisionedProductProperties = "AWS242ServiceCatalogService.UpdateProvisionedProductProperties"
}
export declare class UpdateProvisionedProductPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateProvisionedProductPropertiesXAmzTargetEnum;
}
export declare class UpdateProvisionedProductPropertiesRequest extends SpeakeasyBase {
    headers: UpdateProvisionedProductPropertiesHeaders;
    request: shared.UpdateProvisionedProductPropertiesInput;
}
export declare class UpdateProvisionedProductPropertiesResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    invalidStateException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateProvisionedProductPropertiesOutput?: shared.UpdateProvisionedProductPropertiesOutput;
}
