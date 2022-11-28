import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TimeOffRequestsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.TimeOffRequestsFilter;
    limit?: number;
    raw?: boolean;
}
export declare class TimeOffRequestsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TimeOffRequestsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TimeOffRequestsAllRequest extends SpeakeasyBase {
    queryParams: TimeOffRequestsAllQueryParams;
    headers: TimeOffRequestsAllHeaders;
    security: TimeOffRequestsAllSecurity;
}
export declare class TimeOffRequestsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getTimeOffRequestsResponse?: shared.GetTimeOffRequestsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
