import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class ConsumerRequestCountsAllPathParams extends SpeakeasyBase {
    consumerId: string;
}
export declare class ConsumerRequestCountsAllQueryParams extends SpeakeasyBase {
    endDatetime: string;
    startDatetime: string;
}
export declare class ConsumerRequestCountsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ConsumerRequestCountsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ConsumerRequestCountsAllRequest extends SpeakeasyBase {
    pathParams: ConsumerRequestCountsAllPathParams;
    queryParams: ConsumerRequestCountsAllQueryParams;
    headers: ConsumerRequestCountsAllHeaders;
    security: ConsumerRequestCountsAllSecurity;
}
export declare class ConsumerRequestCountsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    consumerRequestCountsInDateRangeResponse?: shared.ConsumerRequestCountsInDateRangeResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
