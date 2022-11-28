import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdWatchersPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdWatchersSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdWatchersRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdWatchersPathParams;
    security: GetSnippetsWorkspaceEncodedIdWatchersSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdWatchersResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedUsers?: shared.PaginatedUsers;
}
