import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams;
    security: PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    participant?: Map<string, any>;
}
