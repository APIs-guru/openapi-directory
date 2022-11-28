import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugHooksUidPathParams extends SpeakeasyBase {
    repoSlug: string;
    uid: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugHooksUidRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugHooksUidPathParams;
    security: GetRepositoriesWorkspaceRepoSlugHooksUidSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
