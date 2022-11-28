import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsPathParams;
    request: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugBranchRestrictionsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugBranchRestrictionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchrestriction?: Map<string, any>;
    error?: Map<string, any>;
}
