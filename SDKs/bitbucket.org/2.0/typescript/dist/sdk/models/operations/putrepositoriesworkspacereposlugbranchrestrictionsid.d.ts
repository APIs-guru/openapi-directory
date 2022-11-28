import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
    id: string;
    repoSlug: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;
    request: Map<string, any>;
    security: PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    branchrestriction?: Map<string, any>;
    error?: Map<string, any>;
}
