import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessageReactionsIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetMessageReactionsIdRequest extends SpeakeasyBase {
    pathParams: GetMessageReactionsIdPathParams;
}
export declare class GetMessageReactionsIdResponse extends SpeakeasyBase {
    contentType: string;
    messageReactionEntity?: shared.MessageReactionEntity;
    statusCode: number;
}
