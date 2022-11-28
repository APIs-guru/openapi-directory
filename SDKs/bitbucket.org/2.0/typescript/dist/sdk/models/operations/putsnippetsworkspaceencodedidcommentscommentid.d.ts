import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams extends SpeakeasyBase {
    commentId: number;
    encodedId: string;
    workspace: string;
}
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity extends SpeakeasyBase {
    oauth2?: shared.SchemeOauth2;
    basic?: shared.SchemeBasic;
    apiKey?: shared.SchemeApiKey;
}
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdRequest extends SpeakeasyBase {
    pathParams: PutSnippetsWorkspaceEncodedIdCommentsCommentIdPathParams;
    security: PutSnippetsWorkspaceEncodedIdCommentsCommentIdSecurity;
}
export declare class PutSnippetsWorkspaceEncodedIdCommentsCommentIdResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    error?: Map<string, any>;
}
