import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugRefsBranchesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugRefsBranchesRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugRefsBranchesPathParams;
    security: PostRepositoriesWorkspaceRepoSlugRefsBranchesSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugRefsBranchesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branch?: Map<string, any>;
    error?: Map<string, any>;
}
