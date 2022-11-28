import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutRepositoriesWorkspaceRepoSlugHooksUidPathParams extends SpeakeasyBase {
    repoSlug: string;
    uid: string;
    workspace: string;
}
export declare class PutRepositoriesWorkspaceRepoSlugHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutRepositoriesWorkspaceRepoSlugHooksUidRequest extends SpeakeasyBase {
    pathParams: PutRepositoriesWorkspaceRepoSlugHooksUidPathParams;
    security: PutRepositoriesWorkspaceRepoSlugHooksUidSecurity;
}
export declare class PutRepositoriesWorkspaceRepoSlugHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
