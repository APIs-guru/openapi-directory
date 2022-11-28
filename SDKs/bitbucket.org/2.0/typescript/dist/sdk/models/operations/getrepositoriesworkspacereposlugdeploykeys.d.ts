import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDeployKeysPathParams;
    security: GetRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedDeployKeys?: shared.PaginatedDeployKeys;
}
