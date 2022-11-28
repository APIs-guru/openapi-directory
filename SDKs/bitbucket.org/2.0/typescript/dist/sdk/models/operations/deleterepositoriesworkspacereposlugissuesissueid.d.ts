import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issue?: Map<string, any>;
}
