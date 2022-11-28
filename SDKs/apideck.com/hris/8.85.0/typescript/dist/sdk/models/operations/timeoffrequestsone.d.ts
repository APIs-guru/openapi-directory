import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TimeOffRequestsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TimeOffRequestsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TimeOffRequestsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TimeOffRequestsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TimeOffRequestsOneRequest extends SpeakeasyBase {
    pathParams: TimeOffRequestsOnePathParams;
    queryParams: TimeOffRequestsOneQueryParams;
    headers: TimeOffRequestsOneHeaders;
    security: TimeOffRequestsOneSecurity;
}
export declare class TimeOffRequestsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getTimeOffRequestResponse?: shared.GetTimeOffRequestResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
