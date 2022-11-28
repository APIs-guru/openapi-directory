import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDownloadsPathParams;
    security: GetRepositoriesWorkspaceRepoSlugDownloadsSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
