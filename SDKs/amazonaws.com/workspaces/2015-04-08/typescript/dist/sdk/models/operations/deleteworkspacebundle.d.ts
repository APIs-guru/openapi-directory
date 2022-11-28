import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DeleteWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceDeleteWorkspaceBundle = "WorkspacesService.DeleteWorkspaceBundle"
}
export declare class DeleteWorkspaceBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: DeleteWorkspaceBundleXAmzTargetEnum;
}
export declare class DeleteWorkspaceBundleRequest extends SpeakeasyBase {
    headers: DeleteWorkspaceBundleHeaders;
    request: shared.DeleteWorkspaceBundleRequest;
}
export declare class DeleteWorkspaceBundleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    deleteWorkspaceBundleResult?: Map<string, any>;
    invalidParameterValuesException?: any;
    resourceAssociatedException?: any;
    resourceNotFoundException?: any;
    statusCode: number;
}
