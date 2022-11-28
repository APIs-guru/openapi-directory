import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum RegisterWorkspaceDirectoryXAmzTargetEnum {
    WorkspacesServiceRegisterWorkspaceDirectory = "WorkspacesService.RegisterWorkspaceDirectory"
}
export declare class RegisterWorkspaceDirectoryHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: RegisterWorkspaceDirectoryXAmzTargetEnum;
}
export declare class RegisterWorkspaceDirectoryRequest extends SpeakeasyBase {
    headers: RegisterWorkspaceDirectoryHeaders;
    request: shared.RegisterWorkspaceDirectoryRequest;
}
export declare class RegisterWorkspaceDirectoryResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    operationNotSupportedException?: any;
    registerWorkspaceDirectoryResult?: Map<string, any>;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
    unsupportedNetworkConfigurationException?: any;
    workspacesDefaultRoleNotFoundException?: any;
}
