import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams extends SpeakeasyBase {
    commit: string;
    key: string;
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyPathParams;
    security: GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeySecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugCommitCommitStatusesBuildKeyResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    commitstatus?: Map<string, any>;
    error?: Map<string, any>;
}
