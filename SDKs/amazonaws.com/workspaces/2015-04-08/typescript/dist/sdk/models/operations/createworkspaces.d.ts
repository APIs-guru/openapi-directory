import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum CreateWorkspacesXAmzTargetEnum {
    WorkspacesServiceCreateWorkspaces = "WorkspacesService.CreateWorkspaces"
}
export declare class CreateWorkspacesHeaders extends SpeakeasyBase {
    xAmzAlgorithm?: string;
    xAmzContentSha256?: string;
    xAmzCredential?: string;
    xAmzDate?: string;
    xAmzSecurityToken?: string;
    xAmzSignature?: string;
    xAmzSignedHeaders?: string;
    xAmzTarget: CreateWorkspacesXAmzTargetEnum;
}
export declare class CreateWorkspacesRequest extends SpeakeasyBase {
    headers: CreateWorkspacesHeaders;
    request: shared.CreateWorkspacesRequest;
}
export declare class CreateWorkspacesResponse extends SpeakeasyBase {
    contentType: string;
    createWorkspacesResult?: shared.CreateWorkspacesResult;
    invalidParameterValuesException?: any;
    resourceLimitExceededException?: any;
    statusCode: number;
}
