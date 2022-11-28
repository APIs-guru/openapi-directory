import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
    id: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;
    security: GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchrestriction?: Map<string, any>;
    error?: Map<string, any>;
}
