import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RestoreWorkspaceXAmzTargetEnum {
    WorkspacesServiceRestoreWorkspace = "WorkspacesService.RestoreWorkspace"
}
export declare class RestoreWorkspaceHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RestoreWorkspaceXAmzTargetEnum;
}
export declare class RestoreWorkspaceRequest extends SpeakeasyBase {
    headers: RestoreWorkspaceHeaders;
    request: shared.RestoreWorkspaceRequest;
}
export declare class RestoreWorkspaceResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    resourceNotFoundException?: any;
    restoreWorkspaceResult?: Map<string, any>;
    statusCode: number;
}
