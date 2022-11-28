import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class PaymentsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PaymentsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PaymentsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PaymentsOneRequest extends SpeakeasyBase {
    pathParams: PaymentsOnePathParams;
    queryParams: PaymentsOneQueryParams;
    headers: PaymentsOneHeaders;
    security: PaymentsOneSecurity;
}
export declare class PaymentsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getPosPaymentResponse?: shared.GetPosPaymentResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
