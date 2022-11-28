import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams extends SpeakeasyBase {
    repoSlug: string;
    spec: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams extends SpeakeasyBase {
    binary?: boolean;
    context?: number;
    ignoreWhitespace?: boolean;
    merge?: boolean;
    path?: string;
    renames?: boolean;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffSpecRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugDiffSpecPathParams;
    queryParams: GetRepositoriesWorkspaceRepoSlugDiffSpecQueryParams;
    security: GetRepositoriesWorkspaceRepoSlugDiffSpecSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugDiffSpecResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
