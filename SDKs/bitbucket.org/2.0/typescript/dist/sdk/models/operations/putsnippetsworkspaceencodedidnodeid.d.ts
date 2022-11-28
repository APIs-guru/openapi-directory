import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSnippetsWorkspaceEncodedIdNodeIdPathParams extends SpeakeasyBase {
    encodedId: string;
    nodeId: string;
    workspace: string;
}
export declare class PutSnippetsWorkspaceEncodedIdNodeIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutSnippetsWorkspaceEncodedIdNodeIdRequest extends SpeakeasyBase {
    pathParams: PutSnippetsWorkspaceEncodedIdNodeIdPathParams;
    security: PutSnippetsWorkspaceEncodedIdNodeIdSecurity;
}
export declare class PutSnippetsWorkspaceEncodedIdNodeIdResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    snippet?: Map<string, any>;
}
