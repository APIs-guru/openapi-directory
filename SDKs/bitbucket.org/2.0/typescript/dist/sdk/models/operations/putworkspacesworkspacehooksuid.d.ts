import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
    uid: string;
    workspace: string;
}
export declare class PutWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
    pathParams: PutWorkspacesWorkspaceHooksUidPathParams;
    security: PutWorkspacesWorkspaceHooksUidSecurity;
}
export declare class PutWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    webhookSubscription?: Map<string, any>;
}
