import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
    uid: string;
    workspace: string;
}
export declare class GetWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
    pathParams: GetWorkspacesWorkspaceHooksUidPathParams;
    security: GetWorkspacesWorkspaceHooksUidSecurity;
}
export declare class GetWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
