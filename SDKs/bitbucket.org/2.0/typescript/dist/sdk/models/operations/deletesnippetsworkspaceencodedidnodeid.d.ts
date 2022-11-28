import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams extends SpeakeasyBase {
    encodedId: string;
    nodeId: string;
    workspace: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdRequest extends SpeakeasyBase {
    pathParams: DeleteSnippetsWorkspaceEncodedIdNodeIdPathParams;
    security: DeleteSnippetsWorkspaceEncodedIdNodeIdSecurity;
}
export declare class DeleteSnippetsWorkspaceEncodedIdNodeIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
