import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedIssues?: shared.PaginatedIssues;
}
