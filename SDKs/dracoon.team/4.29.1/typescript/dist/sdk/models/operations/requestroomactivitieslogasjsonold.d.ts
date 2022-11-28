import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestRoomActivitiesLogAsJsonOldPathParams extends SpeakeasyBase {
    roomId: number;
}
export declare class RequestRoomActivitiesLogAsJsonOldQueryParams extends SpeakeasyBase {
    dateEnd?: string;
    dateStart?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    status?: number;
    type?: number;
    userId?: number;
}
export declare class RequestRoomActivitiesLogAsJsonOldHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestRoomActivitiesLogAsJsonOldRequest extends SpeakeasyBase {
    pathParams: RequestRoomActivitiesLogAsJsonOldPathParams;
    queryParams: RequestRoomActivitiesLogAsJsonOldQueryParams;
    headers: RequestRoomActivitiesLogAsJsonOldHeaders;
}
export declare class RequestRoomActivitiesLogAsJsonOldResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    syslogEventList?: shared.SyslogEventList;
}
