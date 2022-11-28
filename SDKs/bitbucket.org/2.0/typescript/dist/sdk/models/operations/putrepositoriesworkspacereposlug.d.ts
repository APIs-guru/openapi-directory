import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugPathParams;
    request?: Map<string, any>;
    security: PutRepositoriesWorkspaceRepoSlugSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    repository?: Map<string, any>;
}
