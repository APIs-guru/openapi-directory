import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugBranchingModelPathParams;
    security: GetRepositoriesWorkspaceRepoSlugBranchingModelSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchingModelResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchingModel?: Map<string, any>;
    error?: Map<string, any>;
}
