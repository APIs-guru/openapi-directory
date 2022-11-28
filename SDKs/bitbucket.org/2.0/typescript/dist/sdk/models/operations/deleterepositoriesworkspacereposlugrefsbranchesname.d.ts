import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams extends SpeakeasyBase {
    name: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNamePathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugRefsBranchesNameResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
