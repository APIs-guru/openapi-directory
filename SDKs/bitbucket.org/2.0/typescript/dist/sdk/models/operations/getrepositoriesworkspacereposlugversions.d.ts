import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugVersionsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugVersionsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugVersionsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugVersionsPathParams;
    security: GetRepositoriesWorkspaceRepoSlugVersionsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugVersionsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedVersions?: shared.PaginatedVersions;
}
