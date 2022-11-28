import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
