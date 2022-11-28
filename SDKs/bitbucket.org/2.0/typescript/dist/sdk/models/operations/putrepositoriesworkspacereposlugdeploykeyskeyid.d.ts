import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams extends SpeakeasyBase {
    keyId: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams;
    security: PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    deployKey?: Map<string, any>;
    error?: Map<string, any>;
}
