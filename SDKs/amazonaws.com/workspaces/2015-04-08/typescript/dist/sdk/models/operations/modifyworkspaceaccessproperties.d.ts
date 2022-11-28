import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum ModifyWorkspaceAccessPropertiesXAmzTargetEnum {
    WorkspacesServiceModifyWorkspaceAccessProperties = "WorkspacesService.ModifyWorkspaceAccessProperties"
}
export declare class ModifyWorkspaceAccessPropertiesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: ModifyWorkspaceAccessPropertiesXAmzTargetEnum;
}
export declare class ModifyWorkspaceAccessPropertiesRequest extends SpeakeasyBase {
    headers: ModifyWorkspaceAccessPropertiesHeaders;
    request: shared.ModifyWorkspaceAccessPropertiesRequest;
}
export declare class ModifyWorkspaceAccessPropertiesResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    modifyWorkspaceAccessPropertiesResult?: Map<string, any>;
    resourceNotFoundException?: any;
    statusCode: number;
}
