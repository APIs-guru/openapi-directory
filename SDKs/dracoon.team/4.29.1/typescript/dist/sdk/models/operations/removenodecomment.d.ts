import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveNodeCommentPathParams extends SpeakeasyBase {
    commentId: number;
}
export declare class RemoveNodeCommentHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RemoveNodeCommentRequest extends SpeakeasyBase {
    pathParams: RemoveNodeCommentPathParams;
    headers: RemoveNodeCommentHeaders;
}
export declare class RemoveNodeCommentResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
