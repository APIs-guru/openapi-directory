import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugComponentsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugComponentsPathParams;
    security: GetRepositoriesWorkspaceRepoSlugComponentsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugComponentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedComponents?: shared.PaginatedComponents;
}
