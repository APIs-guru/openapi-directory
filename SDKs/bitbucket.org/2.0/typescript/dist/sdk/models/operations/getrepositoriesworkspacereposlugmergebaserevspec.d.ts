import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams extends SpeakeasyBase {
    repoSlug: string;
    revspec: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecPathParams;
    security: GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugMergeBaseRevspecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    commit?: Map<string, any>;
    error?: Map<string, any>;
}
