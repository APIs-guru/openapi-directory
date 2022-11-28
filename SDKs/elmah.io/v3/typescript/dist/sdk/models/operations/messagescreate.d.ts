import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesCreatePathParams extends SpeakeasyBase {
    logId: string;
}
export declare class MessagesCreateRequests extends SpeakeasyBase {
    createMessage?: shared.CreateMessage;
    createMessage1?: shared.CreateMessage;
    createMessage2?: shared.CreateMessage;
    createMessage3?: shared.CreateMessage;
}
export declare class MessagesCreateRequest extends SpeakeasyBase {
    pathParams: MessagesCreatePathParams;
    request?: MessagesCreateRequests;
}
export declare class MessagesCreateResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    createMessageResult?: shared.CreateMessageResult;
    statusCode: number;
}
