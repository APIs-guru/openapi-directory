import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesPathParams;
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    participant?: Map<string, any>;
}
