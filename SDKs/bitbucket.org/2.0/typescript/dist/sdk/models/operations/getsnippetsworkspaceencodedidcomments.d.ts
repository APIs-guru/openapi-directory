import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdCommentsPathParams extends SpeakeasyBase {
    encodedId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdCommentsSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdCommentsRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdCommentsPathParams;
    security: GetSnippetsWorkspaceEncodedIdCommentsSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdCommentsResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    paginatedSnippetComments?: shared.PaginatedSnippetComments;
}
