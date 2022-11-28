import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyWorkspaceCreationPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceCreationProperties = "WorkspacesService.ModifyWorkspaceCreationProperties"
}
export declare class ModifyWorkspaceCreationPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspaceCreationPropertiesXAmzTargetEnum;
}
export declare class ModifyWorkspaceCreationPropertiesRequest extends SpeakeasyBase {
    headers: ModifyWorkspaceCreationPropertiesHeaders;
    request: shared.ModifyWorkspaceCreationPropertiesRequest;
}
export declare class ModifyWorkspaceCreationPropertiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    modifyWorkspaceCreationPropertiesResult?: Map<string, any>;
    operationNotSupportedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
