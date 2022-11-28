import { SpeakeasyBase } from "../../../internal/utils";
export declare class MessagesFixPathParams extends SpeakeasyBase {
    id: string;
    logId: string;
}
export declare class MessagesFixQueryParams extends SpeakeasyBase {
    markAllAsFixed?: boolean;
}
export declare class MessagesFixRequest extends SpeakeasyBase {
    pathParams: MessagesFixPathParams;
    queryParams: MessagesFixQueryParams;
}
export declare class MessagesFixResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
