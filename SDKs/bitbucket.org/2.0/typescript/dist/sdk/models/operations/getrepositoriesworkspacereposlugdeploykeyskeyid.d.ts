import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams extends SpeakeasyBase {
    keyId: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deployKey?: Map<string, any>;
    error?: Map<string, any>;
}
