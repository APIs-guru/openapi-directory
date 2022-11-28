import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugDownloadsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugDownloadsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugDownloadsRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugDownloadsPathParams;
    security: PostRepositoriesWorkspaceRepoSlugDownloadsSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugDownloadsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
