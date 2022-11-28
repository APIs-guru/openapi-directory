import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSnippetsWorkspaceEncodedIdWatchPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class PutSnippetsWorkspaceEncodedIdWatchSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutSnippetsWorkspaceEncodedIdWatchRequest extends SpeakeasyBase {
    pathParams: PutSnippetsWorkspaceEncodedIdWatchPathParams;
    security: PutSnippetsWorkspaceEncodedIdWatchSecurity;
}
export declare class PutSnippetsWorkspaceEncodedIdWatchResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedUsers?: shared.PaginatedUsers;
}
