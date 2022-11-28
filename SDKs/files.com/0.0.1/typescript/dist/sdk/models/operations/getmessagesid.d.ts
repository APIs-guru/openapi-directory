import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetMessagesIdPathParams extends SpeakeasyBase {
    id: number;
}
export declare class GetMessagesIdRequest extends SpeakeasyBase {
    pathParams: GetMessagesIdPathParams;
}
export declare class GetMessagesIdResponse extends SpeakeasyBase {
    contentType: string;
    messageEntity?: shared.MessageEntity;
    statusCode: number;
}
