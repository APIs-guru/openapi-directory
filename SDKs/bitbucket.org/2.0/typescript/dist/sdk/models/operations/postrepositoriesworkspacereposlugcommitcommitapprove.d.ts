import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams extends SpeakeasyBase {
    commit: string;
    repoSlug: string;
    workspace: string;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitApproveRequest extends SpeakeasyBase {
    pathParams: PostRepositoriesWorkspaceRepoSlugCommitCommitApprovePathParams;
    security: PostRepositoriesWorkspaceRepoSlugCommitCommitApproveSecurity;
}
export declare class PostRepositoriesWorkspaceRepoSlugCommitCommitApproveResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    participant?: Map<string, any>;
}
