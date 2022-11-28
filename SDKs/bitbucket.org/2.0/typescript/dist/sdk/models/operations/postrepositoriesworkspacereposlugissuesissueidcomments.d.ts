import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsPathParams;
    request: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
}
