import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugIssuesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugIssuesPathParams;
    request: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugIssuesSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    issue?: Map<string, any>;
}
