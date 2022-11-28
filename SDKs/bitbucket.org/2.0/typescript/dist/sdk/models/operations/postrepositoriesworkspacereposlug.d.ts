import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugPathParams;
    request?: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    repository?: Map<string, any>;
}
