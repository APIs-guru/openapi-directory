import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TimeOffRequestsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TimeOffRequestsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TimeOffRequestsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TimeOffRequestsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TimeOffRequestsUpdateRequest extends SpeakeasyBase {
    pathParams: TimeOffRequestsUpdatePathParams;
    queryParams: TimeOffRequestsUpdateQueryParams;
    headers: TimeOffRequestsUpdateHeaders;
    request: shared.TimeOffRequestInput;
    security: TimeOffRequestsUpdateSecurity;
}
export declare class TimeOffRequestsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateTimeOffRequestResponse?: shared.UpdateTimeOffRequestResponse;
}
