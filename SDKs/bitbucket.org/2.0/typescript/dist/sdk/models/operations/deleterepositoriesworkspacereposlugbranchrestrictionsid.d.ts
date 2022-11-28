import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams extends SpeakeasyBase {
    id: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugBranchRestrictionsIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
