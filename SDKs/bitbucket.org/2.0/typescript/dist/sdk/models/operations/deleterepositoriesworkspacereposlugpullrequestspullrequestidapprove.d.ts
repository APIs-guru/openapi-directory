import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApprovePathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdApproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
