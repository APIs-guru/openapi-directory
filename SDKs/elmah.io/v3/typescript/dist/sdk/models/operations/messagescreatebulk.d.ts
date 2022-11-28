import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesCreateBulkPathParams extends SpeakeasyBase {
    logId: string;
}
export declare class MessagesCreateBulkRequests extends SpeakeasyBase {
    createMessages?: shared.CreateMessage[];
    createMessages1?: shared.CreateMessage[];
    createMessages2?: shared.CreateMessage[];
    createMessages3?: shared.CreateMessage[];
}
export declare class MessagesCreateBulkRequest extends SpeakeasyBase {
    pathParams: MessagesCreateBulkPathParams;
    request?: MessagesCreateBulkRequests;
}
export declare class MessagesCreateBulkResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    createBulkMessageResults?: shared.CreateBulkMessageResult[];
    statusCode: number;
}
