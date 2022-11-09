import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class LogsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.LogsFilter;
    limit?: number;
}
export declare class LogsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class LogsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class LogsAllRequest extends SpeakeasyBase {
    queryParams: LogsAllQueryParams;
    headers: LogsAllHeaders;
    security: LogsAllSecurity;
}
export declare class LogsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getLogsResponse?: shared.GetLogsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
