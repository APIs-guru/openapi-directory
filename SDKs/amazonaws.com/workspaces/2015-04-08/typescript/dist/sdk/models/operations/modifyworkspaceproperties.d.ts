import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyWorkspacePropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceProperties = "WorkspacesService.ModifyWorkspaceProperties"
}
export declare class ModifyWorkspacePropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspacePropertiesXAmzTargetEnum;
}
export declare class ModifyWorkspacePropertiesRequest extends SpeakeasyBase {
    headers: ModifyWorkspacePropertiesHeaders;
    request: shared.ModifyWorkspacePropertiesRequest;
}
export declare class ModifyWorkspacePropertiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    modifyWorkspacePropertiesResult?: Map<string, any>;
    operationInProgressException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    unsupportedWorkspaceConfigurationException?: any;
}
