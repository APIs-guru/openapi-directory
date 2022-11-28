import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams extends SpeakeasyBase {
    q?: string;
    sort?: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugRefsTagsPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugRefsTagsQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugRefsTagsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedTags?: shared.PaginatedTags;
}
