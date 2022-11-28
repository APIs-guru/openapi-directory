import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteWorkspacesWorkspaceHooksUidPathParams extends SpeakeasyBase {
    uid: string;
    workspace: string;
}
export declare class DeleteWorkspacesWorkspaceHooksUidSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteWorkspacesWorkspaceHooksUidRequest extends SpeakeasyBase {
    pathParams: DeleteWorkspacesWorkspaceHooksUidPathParams;
    security: DeleteWorkspacesWorkspaceHooksUidSecurity;
}
export declare class DeleteWorkspacesWorkspaceHooksUidResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
