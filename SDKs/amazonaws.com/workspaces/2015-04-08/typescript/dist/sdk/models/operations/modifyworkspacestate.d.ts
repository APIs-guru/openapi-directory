import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyWorkspaceStateXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceState = "WorkspacesService.ModifyWorkspaceState"
}
export declare class ModifyWorkspaceStateHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspaceStateXAmzTargetEnum;
}
export declare class ModifyWorkspaceStateRequest extends SpeakeasyBase {
    headers: ModifyWorkspaceStateHeaders;
    request: shared.ModifyWorkspaceStateRequest;
}
export declare class ModifyWorkspaceStateResponse extends SpeakeasyBase {
    contentType: string;
    invalidParameterValuesException?: any;
    invalidResourceStateException?: any;
    modifyWorkspaceStateResult?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
