import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugForksPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugForksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugForksRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugForksPathParams;
    request?: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugForksSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugForksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    repository?: Map<string, any>;
}
