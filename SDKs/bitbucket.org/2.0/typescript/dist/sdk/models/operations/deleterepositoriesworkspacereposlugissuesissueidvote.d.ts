import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
