import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWorkspaceImagePermissionXAmzTargetEnum {
    WorkspacesServiceUpdateWorkspaceImagePermission = "WorkspacesService.UpdateWorkspaceImagePermission"
}
export declare class UpdateWorkspaceImagePermissionHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkspaceImagePermissionXAmzTargetEnum;
}
export declare class UpdateWorkspaceImagePermissionRequest extends SpeakeasyBase {
    headers: UpdateWorkspaceImagePermissionHeaders;
    request: shared.UpdateWorkspaceImagePermissionRequest;
}
export declare class UpdateWorkspaceImagePermissionResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    updateWorkspaceImagePermissionResult?: Map<string, any>;
}
