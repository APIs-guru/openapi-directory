import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugSrcPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugSrcQueryParams extends SpeakeasyBase {
    author?: string;
    branch?: string;
    files?: string;
    message?: string;
    parents?: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugSrcSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugSrcRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugSrcPathParams;
    queryParams: PostRepositoriesWorkspaceRepoSlugSrcQueryParams;
    security: PostRepositoriesWorkspaceRepoSlugSrcSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugSrcResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
