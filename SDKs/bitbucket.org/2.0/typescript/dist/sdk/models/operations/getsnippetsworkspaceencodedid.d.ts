import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdPathParams;
    security: GetSnippetsWorkspaceEncodedIdSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
