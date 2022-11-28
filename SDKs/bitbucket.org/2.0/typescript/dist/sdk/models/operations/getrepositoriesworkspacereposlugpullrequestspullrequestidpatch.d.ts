import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchPathParams;
    security: GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
