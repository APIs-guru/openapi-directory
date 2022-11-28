import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesPathParams;
    request: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesIssueIdChangesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    issueChange?: Map<string, any>;
}
