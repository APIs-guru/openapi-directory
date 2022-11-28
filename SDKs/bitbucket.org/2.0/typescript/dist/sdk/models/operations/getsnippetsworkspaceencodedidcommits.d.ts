import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdCommitsPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdCommitsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdCommitsRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdCommitsPathParams;
    security: GetSnippetsWorkspaceEncodedIdCommitsSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdCommitsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedSnippetCommit?: shared.PaginatedSnippetCommit;
}
