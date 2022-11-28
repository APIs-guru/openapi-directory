import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TimeOffRequestsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TimeOffRequestsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TimeOffRequestsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TimeOffRequestsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TimeOffRequestsDeleteRequest extends SpeakeasyBase {
    pathParams: TimeOffRequestsDeletePathParams;
    queryParams: TimeOffRequestsDeleteQueryParams;
    headers: TimeOffRequestsDeleteHeaders;
    security: TimeOffRequestsDeleteSecurity;
}
export declare class TimeOffRequestsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteTimeOffRequestResponse?: shared.DeleteTimeOffRequestResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
