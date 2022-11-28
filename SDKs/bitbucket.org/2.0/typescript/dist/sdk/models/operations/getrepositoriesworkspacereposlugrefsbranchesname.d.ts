import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams extends SpeakeasyBase {
    name: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams;
    security: GetRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branch?: Map<string, any>;
    error?: Map<string, any>;
}
