import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessageCommentReactionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetMessageCommentReactionsIdRequest extends SpeakeasyBase {
    pathParams: GetMessageCommentReactionsIdPathParams;
}
export declare class GetMessageCommentReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    messageCommentReactionEntity?: shared.MessageCommentReactionEntity;
    statusCode: number;
}
