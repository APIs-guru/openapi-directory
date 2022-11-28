import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams extends SpeakeasyBase {
    issueId: string;
    path: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdAttachmentsPathResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
}
