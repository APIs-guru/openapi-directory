import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams extends SpeakeasyBase {
    encodedId: string;
    revision: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdCommitsRevisionRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdCommitsRevisionPathParams;
    security: GetSnippetsWorkspaceEncodedIdCommitsRevisionSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdCommitsRevisionResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    snippetCommit?: Map<string, any>;
}
