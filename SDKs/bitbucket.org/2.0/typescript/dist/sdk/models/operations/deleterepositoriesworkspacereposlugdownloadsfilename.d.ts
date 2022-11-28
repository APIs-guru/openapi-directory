import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams extends SpeakeasyBase {
    filename: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenamePathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDownloadsFilenameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
