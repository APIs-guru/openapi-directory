import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetRepositoriesWorkspaceRepoSlugHooksPathParams extends SpeakeasyBase {
    repoSlug: string;
    workspace: string;
}
export declare class GetRepositoriesWorkspaceRepoSlugHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetRepositoriesWorkspaceRepoSlugHooksRequest extends SpeakeasyBase {
    pathParams: GetRepositoriesWorkspaceRepoSlugHooksPathParams;
    security: GetRepositoriesWorkspaceRepoSlugHooksSecurity;
}
export declare class GetRepositoriesWorkspaceRepoSlugHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
