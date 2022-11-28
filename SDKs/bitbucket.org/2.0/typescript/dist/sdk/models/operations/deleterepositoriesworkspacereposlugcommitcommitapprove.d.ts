import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
