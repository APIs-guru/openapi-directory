import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams extends SpeakeasyBase {
    issueId: string;
    path: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
