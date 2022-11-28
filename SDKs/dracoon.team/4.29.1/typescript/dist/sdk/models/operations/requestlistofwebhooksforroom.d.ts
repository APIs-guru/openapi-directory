import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestListOfWebhooksForRoomPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestListOfWebhooksForRoomQueryParams extends SpeakeasyBase {
    filter?: string;
    limit?: number;
    offset?: number;
}
export declare class RequestListOfWebhooksForRoomHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestListOfWebhooksForRoomRequest extends SpeakeasyBase {
    pathParams: RequestListOfWebhooksForRoomPathParams;
    queryParams: RequestListOfWebhooksForRoomQueryParams;
    headers: RequestListOfWebhooksForRoomHeaders;
}
export declare class RequestListOfWebhooksForRoomResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roomWebhookList?: shared.RoomWebhookList;
    statusCode: number;
}
