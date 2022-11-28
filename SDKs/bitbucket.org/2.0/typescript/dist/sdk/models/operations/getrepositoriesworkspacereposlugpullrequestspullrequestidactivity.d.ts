import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityPathParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivitySecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdActivityResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
