import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugDeployKeysRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugDeployKeysPathParams;
    security: PostRepositoriesWorkspaceRepoSlugDeployKeysSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugDeployKeysResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deployKey?: Map<string, any>;
    error?: Map<string, any>;
}
