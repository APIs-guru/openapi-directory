import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdPathParams;
    request: Map<string, any>;
    security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issueComment?: Map<string, any>;
}
