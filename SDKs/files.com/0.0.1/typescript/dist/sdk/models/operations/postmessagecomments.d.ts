import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMessageCommentsRequestBody extends SpeakeasyBase {
    body: string;
    userId?: number;
}
export declare class PostMessageCommentsRequest extends SpeakeasyBase {
    request?: PostMessageCommentsRequestBody;
}
export declare class PostMessageCommentsResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentEntity?: shared.MessageCommentEntity;
    statusCode: number;
}
