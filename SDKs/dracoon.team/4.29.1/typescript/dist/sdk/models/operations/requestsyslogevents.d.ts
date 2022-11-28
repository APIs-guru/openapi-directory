import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestSyslogEventsQueryParams extends SpeakeasyBase {
    dateEnd?: string;
    dateStart?: string;
    limit?: number;
    offset?: number;
    sort?: string;
    status?: any;
    type?: number;
    userClient?: string;
    userId?: number;
}
export declare class RequestSyslogEventsHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestSyslogEventsRequest extends SpeakeasyBase {
    queryParams: RequestSyslogEventsQueryParams;
    headers: RequestSyslogEventsHeaders;
}
export declare class RequestSyslogEventsResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    syslogEventList?: shared.SyslogEventList;
}
