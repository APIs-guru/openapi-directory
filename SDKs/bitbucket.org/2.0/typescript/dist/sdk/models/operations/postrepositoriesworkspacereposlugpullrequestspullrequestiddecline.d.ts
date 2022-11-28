import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclinePathParams;
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDeclineResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pullrequest?: Map<string, any>;
}
