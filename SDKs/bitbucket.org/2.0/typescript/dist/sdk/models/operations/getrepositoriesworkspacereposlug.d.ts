import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPathParams;
    security: GetRepositoriesWorkspaceRepoSlugSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    repository?: Map<string, any>;
}
