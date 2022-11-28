import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HandleRoomWebhookAssignmentsPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class HandleRoomWebhookAssignmentsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class HandleRoomWebhookAssignmentsRequest extends SpeakeasyBase {
    pathParams: HandleRoomWebhookAssignmentsPathParams;
    headers: HandleRoomWebhookAssignmentsHeaders;
    request: shared.UpdateRoomWebhookRequest;
}
export declare class HandleRoomWebhookAssignmentsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    roomWebhookList?: shared.RoomWebhookList;
    statusCode: number;
}
