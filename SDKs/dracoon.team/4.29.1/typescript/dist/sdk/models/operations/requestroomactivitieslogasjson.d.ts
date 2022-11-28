import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomActivitiesLogAsJsonPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomActivitiesLogAsJsonQueryParams extends SpeakeasyBase {
    dateEnd?: string;
    dateStart?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    status?: number;
    type?: number;
    userId?: number;
}
export declare class RequestRoomActivitiesLogAsJsonHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestRoomActivitiesLogAsJsonRequest extends SpeakeasyBase {
    pathParams: RequestRoomActivitiesLogAsJsonPathParams;
    queryParams: RequestRoomActivitiesLogAsJsonQueryParams;
    headers: RequestRoomActivitiesLogAsJsonHeaders;
}
export declare class RequestRoomActivitiesLogAsJsonResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    logEventList?: shared.LogEventList;
    statusCode: number;
}
