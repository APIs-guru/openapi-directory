import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugSrcPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare enum GetRepositoriesWorkspaceRepoSlugSrcFormatEnum {
    Meta = "meta"
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcQueryParams extends SpeakeasyBase {
    format?: GetRepositoriesWorkspaceRepoSlugSrcFormatEnum;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugSrcPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugSrcQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugSrcSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedTreeentries?: shared.PaginatedTreeentries;
}
