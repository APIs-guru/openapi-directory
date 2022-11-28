import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteIpGroupXAmzTargetEnum {
    WorkspacesServiceDeleteIpGroup = "WorkspacesService.DeleteIpGroup"
}
export declare class DeleteIpGroupHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteIpGroupXAmzTargetEnum;
}
export declare class DeleteIpGroupRequest extends SpeakeasyBase {
    headers: DeleteIpGroupHeaders;
    request: shared.DeleteIpGroupRequest;
}
export declare class DeleteIpGroupResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteIpGroupResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    resourceAssociatedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
