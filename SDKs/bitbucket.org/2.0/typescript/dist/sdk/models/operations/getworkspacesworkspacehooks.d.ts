import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceHooksPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class GetWorkspacesWorkspaceHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceHooksRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceHooksPathParams;
    security: GetWorkspacesWorkspaceHooksSecurity;
}
export declare class GetWorkspacesWorkspaceHooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedWebhookSubscriptions?: shared.PaginatedWebhookSubscriptions;
}
