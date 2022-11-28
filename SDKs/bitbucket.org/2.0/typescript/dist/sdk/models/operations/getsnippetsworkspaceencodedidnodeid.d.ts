import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdNodeIdPathParams extends SpeakeasyBase {
    encodedId: string;
    nodeId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdNodeIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdNodeIdRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdNodeIdPathParams;
    security: GetSnippetsWorkspaceEncodedIdNodeIdSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdNodeIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
