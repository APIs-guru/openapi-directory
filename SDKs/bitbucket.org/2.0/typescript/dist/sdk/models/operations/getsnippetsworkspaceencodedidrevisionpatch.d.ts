import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdRevisionPatchPathParams extends SpeakeasyBase {
    encodedId: string;
    revision: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionPatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionPatchRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdRevisionPatchPathParams;
    security: GetSnippetsWorkspaceEncodedIdRevisionPatchSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdRevisionPatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
