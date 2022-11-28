import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSnippetsWorkspaceEncodedIdPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteSnippetsWorkspaceEncodedIdRequest extends SpeakeasyBase {
    pathParams: DeleteSnippetsWorkspaceEncodedIdPathParams;
    security: DeleteSnippetsWorkspaceEncodedIdSecurity;
}
export declare class DeleteSnippetsWorkspaceEncodedIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
