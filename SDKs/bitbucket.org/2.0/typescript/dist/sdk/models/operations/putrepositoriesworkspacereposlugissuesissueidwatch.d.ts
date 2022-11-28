import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchPathParams;
    security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
