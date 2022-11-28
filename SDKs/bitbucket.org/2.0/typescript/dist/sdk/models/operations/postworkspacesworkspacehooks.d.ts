import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWorkspacesWorkspaceHooksPathParams extends SpeakeasyBase {
    workspace: string;
}
export declare class PostWorkspacesWorkspaceHooksSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PostWorkspacesWorkspaceHooksRequest extends SpeakeasyBase {
    pathParams: PostWorkspacesWorkspaceHooksPathParams;
    security: PostWorkspacesWorkspaceHooksSecurity;
}
export declare class PostWorkspacesWorkspaceHooksResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
