import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PaymentsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PaymentsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PaymentsAddRequest extends SpeakeasyBase {
    queryParams: PaymentsAddQueryParams;
    headers: PaymentsAddHeaders;
    request: shared.PosPaymentInput;
    security: PaymentsAddSecurity;
}
export declare class PaymentsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createPosPaymentResponse?: shared.CreatePosPaymentResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
