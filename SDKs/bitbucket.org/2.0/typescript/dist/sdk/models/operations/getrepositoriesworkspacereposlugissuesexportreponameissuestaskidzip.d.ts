import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams extends SpeakeasyBase {
    repoName: string;
    repoSlug: string;
    taskId: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesExportRepoNameIssuesTaskIdZipResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issueJobStatus?: shared.IssueJobStatus;
}
