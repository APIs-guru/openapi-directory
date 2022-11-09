import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum UpdateServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceUpdateServiceAction = "AWS242ServiceCatalogService.UpdateServiceAction"
}
export declare class UpdateServiceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateServiceActionXAmzTargetEnum;
}
export declare class UpdateServiceActionRequest extends SpeakeasyBase {
    headers: UpdateServiceActionHeaders;
    request: shared.UpdateServiceActionInput;
}
export declare class UpdateServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    invalidParametersException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    updateServiceActionOutput?: shared.UpdateServiceActionOutput;
}
