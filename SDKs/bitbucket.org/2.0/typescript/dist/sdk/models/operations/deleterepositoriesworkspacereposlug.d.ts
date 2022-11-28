import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugQueryParams extends SpeakeasyBase {
    redirectTo?: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugPathParams;
    queryParams: DeleteRepositoriesWorkspaceRepoSlugQueryParams;
    security: DeleteRepositoriesWorkspaceRepoSlugSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
