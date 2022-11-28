import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PaymentsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PaymentsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PaymentsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PaymentsDeleteRequest extends SpeakeasyBase {
    pathParams: PaymentsDeletePathParams;
    queryParams: PaymentsDeleteQueryParams;
    headers: PaymentsDeleteHeaders;
    security: PaymentsDeleteSecurity;
}
export declare class PaymentsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deletePaymentResponse?: shared.DeletePaymentResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
