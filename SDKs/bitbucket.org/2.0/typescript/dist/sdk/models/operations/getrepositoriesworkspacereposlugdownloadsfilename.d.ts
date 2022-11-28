import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams extends SpeakeasyBase {
    filename: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams;
    security: GetRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
