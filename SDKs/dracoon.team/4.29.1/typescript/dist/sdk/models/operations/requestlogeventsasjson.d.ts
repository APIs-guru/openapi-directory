import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestLogEventsAsJsonQueryParams extends SpeakeasyBase {
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
export declare class RequestLogEventsAsJsonHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestLogEventsAsJsonRequest extends SpeakeasyBase {
    queryParams: RequestLogEventsAsJsonQueryParams;
    headers: RequestLogEventsAsJsonHeaders;
}
export declare class RequestLogEventsAsJsonResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    logEventList?: shared.LogEventList;
    statusCode: number;
}
