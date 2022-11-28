import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issue?: Map<string, any>;
}
