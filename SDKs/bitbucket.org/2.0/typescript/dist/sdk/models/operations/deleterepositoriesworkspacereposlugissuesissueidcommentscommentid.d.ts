import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams;
    request: Map<string, any>;
    security: DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
