import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsQueryParams extends SpeakeasyBase {
    q?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    paginatedIssueComments?: shared.PaginatedIssueComments;
}
