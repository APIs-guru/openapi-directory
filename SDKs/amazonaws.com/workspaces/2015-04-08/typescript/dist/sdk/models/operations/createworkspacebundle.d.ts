import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkspaceBundleXAmzTargetEnum {
    WorkspacesServiceCreateWorkspaceBundle = "WorkspacesService.CreateWorkspaceBundle"
}
export declare class CreateWorkspaceBundleHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkspaceBundleXAmzTargetEnum;
}
export declare class CreateWorkspaceBundleRequest extends SpeakeasyBase {
    headers: CreateWorkspaceBundleHeaders;
    request: shared.CreateWorkspaceBundleRequest;
}
export declare class CreateWorkspaceBundleResponse extends SpeakeasyBase {
    accessDeniedException?: any;
    contentType: string;
    createWorkspaceBundleResult?: shared.CreateWorkspaceBundleResult;
    invalidParameterValuesException?: any;
    resourceAlreadyExistsException?: any;
    resourceLimitExceededException?: any;
    resourceNotFoundException?: any;
    resourceUnavailableException?: any;
    statusCode: number;
}
