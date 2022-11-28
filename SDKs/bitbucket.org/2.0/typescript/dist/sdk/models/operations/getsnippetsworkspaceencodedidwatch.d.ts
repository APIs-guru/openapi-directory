import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdWatchPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdWatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdWatchRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdWatchPathParams;
    security: GetSnippetsWorkspaceEncodedIdWatchSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedUsers?: shared.PaginatedUsers;
}
