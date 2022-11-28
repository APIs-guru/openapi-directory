import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessageCommentReactionsQueryParams extends SpeakeasyBase {
    cursor?: string;
    messageCommentId: number;
    perPage?: number;
    userId?: number;
}
export declare class GetMessageCommentReactionsRequest extends SpeakeasyBase {
    queryParams: GetMessageCommentReactionsQueryParams;
}
export declare class GetMessageCommentReactionsResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentReactionEntities?: shared.MessageCommentReactionEntity[];
    statusCode: number;
}
