import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams extends SpeakeasyBase {
    repoSlug: string;
    versionId: number;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugVersionsVersionIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugVersionsVersionIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugVersionsVersionIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugVersionsVersionIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    version?: Map<string, any>;
}
