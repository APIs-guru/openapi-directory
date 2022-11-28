import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum UpdateWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceUpdateWorkspaceBundle = "WorkspacesService.UpdateWorkspaceBundle"
}
export declare class UpdateWorkspaceBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: UpdateWorkspaceBundleXAmzTargetEnum;
}
export declare class UpdateWorkspaceBundleRequest extends SpeakeasyBase {
    headers: UpdateWorkspaceBundleHeaders;
    request: shared.UpdateWorkspaceBundleRequest;
}
export declare class UpdateWorkspaceBundleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    invalidParameterValuesException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
    updateWorkspaceBundleResult?: Map<string, any>;
}
