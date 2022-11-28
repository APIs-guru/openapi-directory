import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesGetAllPathParams extends SpeakeasyBase {
    logId: string;
}
export declare class MessagesGetAllQueryParams extends SpeakeasyBase {
    from?: Date;
    includeHeaders?: boolean;
    pageIndex?: number;
    pageSize?: number;
    query?: string;
    to?: Date;
}
export declare class MessagesGetAllRequest extends SpeakeasyBase {
    pathParams: MessagesGetAllPathParams;
    queryParams: MessagesGetAllQueryParams;
}
export declare class MessagesGetAllResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    messagesResult?: shared.MessagesResult;
    statusCode: number;
}
