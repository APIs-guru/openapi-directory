import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TimeOffRequestsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TimeOffRequestsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TimeOffRequestsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TimeOffRequestsAddRequest extends SpeakeasyBase {
    queryParams: TimeOffRequestsAddQueryParams;
    headers: TimeOffRequestsAddHeaders;
    request: shared.TimeOffRequestInput;
    security: TimeOffRequestsAddSecurity;
}
export declare class TimeOffRequestsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createTimeOffRequestResponse?: shared.CreateTimeOffRequestResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
