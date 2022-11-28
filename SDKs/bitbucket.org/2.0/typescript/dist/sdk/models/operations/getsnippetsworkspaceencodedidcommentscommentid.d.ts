import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    encodedId: string;
    workspace: string;
}
export declare class GetSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class GetSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: GetSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams;
    security: GetSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity;
}
export declare class GetSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
    snippetComment?: Map<string, any>;
}
