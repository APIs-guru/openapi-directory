import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMessageCommentReactionsRequestBody extends SpeakeasyBase {
    emoji: string;
    userId?: number;
}
export declare class PostMessageCommentReactionsRequest extends SpeakeasyBase {
    request?: PostMessageCommentReactionsRequestBody;
}
export declare class PostMessageCommentReactionsResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentReactionEntity?: shared.MessageCommentReactionEntity;
    statusCode: number;
}
