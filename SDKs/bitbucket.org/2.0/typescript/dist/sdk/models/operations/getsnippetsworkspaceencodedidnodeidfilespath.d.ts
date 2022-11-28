import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathPathParams extends SpeakeasyBase {
    encodedId: string;
    nodeId: string;
    path: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathPathParams;
    security: GetSnippetsWorkspaceEncodedIdNodeIdFilesPathSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdNodeIdFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
}
