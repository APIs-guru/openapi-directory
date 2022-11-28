import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteRepositoriesWorkspaceRepoSlugHooksUidPathParams extends SpeakeasyBase {
    repoSlug: string;
    uid: string;
    workspace: string;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugHooksUidRequest extends SpeakeasyBase {
    pathParams: DeleteRepositoriesWorkspaceRepoSlugHooksUidPathParams;
    security: DeleteRepositoriesWorkspaceRepoSlugHooksUidSecurity;
}
export declare class DeleteRepositoriesWorkspaceRepoSlugHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
