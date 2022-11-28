import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams extends SpeakeasyBase {
    changeId: string;
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesChangeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issueChange?: Map<string, any>;
}
