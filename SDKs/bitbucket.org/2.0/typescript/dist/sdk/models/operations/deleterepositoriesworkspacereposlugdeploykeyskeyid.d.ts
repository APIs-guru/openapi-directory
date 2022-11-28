import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams extends SpeakeasyBase {
    keyId: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugDeployKeysKeyIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
