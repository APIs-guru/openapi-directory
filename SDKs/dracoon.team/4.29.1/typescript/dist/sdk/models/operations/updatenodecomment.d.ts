import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateNodeCommentPathParams extends SpeakeasyBase {
    commentId: number;
}
export declare class UpdateNodeCommentHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateNodeCommentRequest extends SpeakeasyBase {
    pathParams: UpdateNodeCommentPathParams;
    headers: UpdateNodeCommentHeaders;
    request: shared.ChangeNodeCommentRequest;
}
export declare class UpdateNodeCommentResponse extends SpeakeasyBase {
    comment?: shared.Comment;
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
