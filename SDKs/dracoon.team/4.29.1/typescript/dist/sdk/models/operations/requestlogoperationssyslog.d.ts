import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestLogOperationsSyslogQueryParams extends SpeakeasyBase {
    isDeprecated?: boolean;
}
export declare class RequestLogOperationsSyslogHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
}
export declare class RequestLogOperationsSyslogRequest extends SpeakeasyBase {
    queryParams: RequestLogOperationsSyslogQueryParams;
    headers: RequestLogOperationsSyslogHeaders;
}
export declare class RequestLogOperationsSyslogResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    logOperationList?: shared.LogOperationList;
    statusCode: number;
}
