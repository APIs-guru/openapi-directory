import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    encodedId: string;
    workspace: string;
}
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams;
    security: DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity;
}
export declare class DeleteSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
