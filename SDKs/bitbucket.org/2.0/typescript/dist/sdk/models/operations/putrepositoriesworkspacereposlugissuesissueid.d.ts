import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams extends SpeakeasyBase {
    issueId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdPathParams;
    security: PutRepositoriesWorkspaceRepoSlugIssuesIssueIdSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugIssuesIssueIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    issue?: Map<string, any>;
}
