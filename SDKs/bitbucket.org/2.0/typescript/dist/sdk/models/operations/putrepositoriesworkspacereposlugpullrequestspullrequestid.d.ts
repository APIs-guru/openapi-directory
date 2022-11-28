import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams extends SpeakeasyBase {
    pullRequestId: number;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdPathParams;
    request?: Map<string, any>;
    security: PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugPullrequestsPullRequestIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    pullrequest?: Map<string, any>;
}
