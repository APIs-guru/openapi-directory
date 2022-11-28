import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSnippetsWorkspaceEncodedIdPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class PutSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
    pathParams: PutSnippetsWorkspaceEncodedIdPathParams;
    security: PutSnippetsWorkspaceEncodedIdSecurity;
}
export declare class PutSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
