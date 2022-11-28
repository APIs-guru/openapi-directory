import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeregisterWorkspaceDirectoryXAmzTargetEnum {
    WorkspacesServiceDeregisterWorkspaceDirectory = "WorkspacesService.DeregisterWorkspaceDirectory"
}
export declare class DeregisterWorkspaceDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeregisterWorkspaceDirectoryXAmzTargetEnum;
}
export declare class DeregisterWorkspaceDirectoryRequest extends SpeakeasyBase {
    headers: DeregisterWorkspaceDirectoryHeaders;
    request: shared.DeregisterWorkspaceDirectoryRequest;
}
export declare class DeregisterWorkspaceDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deregisterWorkspaceDirectoryResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
