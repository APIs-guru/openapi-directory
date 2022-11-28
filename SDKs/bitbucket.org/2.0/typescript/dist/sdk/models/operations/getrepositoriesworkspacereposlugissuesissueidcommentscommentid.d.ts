import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    issueComment?: Map<string, any>;
}
