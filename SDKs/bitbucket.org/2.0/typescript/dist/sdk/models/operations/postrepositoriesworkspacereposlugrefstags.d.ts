import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugRefsTagsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugRefsTagsPathParams;
    request: Map<string, any>;
    security: PostRepositoriesWorkspaceRepoSlugRefsTagsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugRefsTagsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    tag?: Map<string, any>;
}
