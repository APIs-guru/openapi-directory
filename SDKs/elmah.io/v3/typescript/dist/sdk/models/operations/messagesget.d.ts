import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesGetPathParams extends SpeakeasyBase {
    id: string;
    logId: string;
}
export declare class MessagesGetRequest extends SpeakeasyBase {
    pathParams: MessagesGetPathParams;
}
export declare class MessagesGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    message?: shared.Message;
    statusCode: number;
}
