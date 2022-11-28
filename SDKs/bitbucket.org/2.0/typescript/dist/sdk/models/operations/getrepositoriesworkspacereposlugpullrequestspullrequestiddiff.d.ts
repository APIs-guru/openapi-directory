import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffPathParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdDiffResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
