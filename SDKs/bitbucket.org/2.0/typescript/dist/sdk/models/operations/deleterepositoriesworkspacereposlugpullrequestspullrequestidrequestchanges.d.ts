import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequestChangesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
