import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdFilesPathPathParams extends SpeakeasyBase {
    encodedId: string;
    path: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdFilesPathSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdFilesPathRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdFilesPathPathParams;
    security: GetSnippetsWorkspaceEncodedIdFilesPathSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdFilesPathResponse extends SpeakeasyBase {
    contentType: string;
    headers: Map<string, string[]>;
    statusCode: number;
    error?: Map<string, any>;
}
