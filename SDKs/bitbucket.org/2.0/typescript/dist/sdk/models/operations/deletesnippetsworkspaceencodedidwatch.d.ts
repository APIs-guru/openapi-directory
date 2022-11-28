import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSnippetsWorkspaceEncodedIdWatchPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdWatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteSnippetsWorkspaceEncodedIdWatchRequest extends SpeakeasyBase {
    pathParams: DeleteSnippetsWorkspaceEncodedIdWatchPathParams;
    security: DeleteSnippetsWorkspaceEncodedIdWatchSecurity;
}
export declare class DeleteSnippetsWorkspaceEncodedIdWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedUsers?: shared.PaginatedUsers;
}
