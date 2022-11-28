import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugIssuesExportPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesExportRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugIssuesExportPathParams;
    request?: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugIssuesExportSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugIssuesExportResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
