import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecPathParams extends SpeakeasyBase {
    repoSlug: string;
    spec: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugPatchSpecPathParams;
    security: GetRepositoriesWorkspaceRepoSlugPatchSpecSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugPatchSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
