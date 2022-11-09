import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare enum DeleteServiceActionXAmzTargetEnum {
    Aws242ServiceCatalogServiceDeleteServiceAction = "AWS242ServiceCatalogService.DeleteServiceAction"
}
export declare class DeleteServiceActionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteServiceActionXAmzTargetEnum;
}
export declare class DeleteServiceActionRequest extends SpeakeasyBase {
    headers: DeleteServiceActionHeaders;
    request: shared.DeleteServiceActionInput;
}
export declare class DeleteServiceActionResponse extends SpeakeasyBase {
    contentType: string;
    deleteServiceActionOutput?: Map<string, any>;
    resourceInUseException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
