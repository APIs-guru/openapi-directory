import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVotePathParams;
    security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdVoteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
