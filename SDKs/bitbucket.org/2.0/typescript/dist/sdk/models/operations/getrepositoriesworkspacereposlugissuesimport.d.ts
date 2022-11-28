import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesImportPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesImportRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesImportPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesImportSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesImportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issueJobStatus?: shared.IssueJobStatus;
}
