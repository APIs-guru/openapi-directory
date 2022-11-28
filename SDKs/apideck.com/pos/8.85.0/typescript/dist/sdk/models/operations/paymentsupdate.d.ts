import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PaymentsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PaymentsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PaymentsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PaymentsUpdateRequest extends SpeakeasyBase {
    pathParams: PaymentsUpdatePathParams;
    queryParams: PaymentsUpdateQueryParams;
    headers: PaymentsUpdateHeaders;
    request: shared.PosPaymentInput;
    security: PaymentsUpdateSecurity;
}
export declare class PaymentsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updatePosPaymentResponse?: shared.UpdatePosPaymentResponse;
}
