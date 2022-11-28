import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostMessageReactionsRequestBody extends SpeakeasyBase {
    emoji: string;
    userId?: number;
}
export declare class PostMessageReactionsRequest extends SpeakeasyBase {
    request?: PostMessageReactionsRequestBody;
}
export declare class PostMessageReactionsResponse extends SpeakeasyBase {
    contentType: string;
    messageReactionEntity?: shared.MessageReactionEntity;
    statusCode: number;
}
