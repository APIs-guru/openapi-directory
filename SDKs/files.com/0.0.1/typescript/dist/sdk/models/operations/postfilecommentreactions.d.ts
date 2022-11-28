import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostFileCommentReactionsRequestBody extends SpeakeasyBase {
    emoji: string;
    fileCommentId: number;
    userId?: number;
}
export declare class PostFileCommentReactionsRequest extends SpeakeasyBase {
    request?: PostFileCommentReactionsRequestBody;
}
export declare class PostFileCommentReactionsResponse extends SpeakeasyBase {
    contentType: string;
    fileCommentReactionEntity?: shared.FileCommentReactionEntity;
    statusCode: number;
}
