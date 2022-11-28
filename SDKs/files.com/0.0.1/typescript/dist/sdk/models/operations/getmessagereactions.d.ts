import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessageReactionsQueryParams extends SpeakeasyBase {
    cursor?: string;
    messageId: number;
    perPage?: number;
    userId?: number;
}
export declare class GetMessageReactionsRequest extends SpeakeasyBase {
    queryParams: GetMessageReactionsQueryParams;
}
export declare class GetMessageReactionsResponse extends SpeakeasyBase {
    contentType: string;
    messageReactionEntities?: shared.MessageReactionEntity[];
    statusCode: number;
}
