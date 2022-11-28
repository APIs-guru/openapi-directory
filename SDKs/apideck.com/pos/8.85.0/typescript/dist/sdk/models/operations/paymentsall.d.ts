import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PaymentsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class PaymentsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PaymentsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PaymentsAllRequest extends SpeakeasyBase {
    queryParams: PaymentsAllQueryParams;
    headers: PaymentsAllHeaders;
    security: PaymentsAllSecurity;
}
export declare class PaymentsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getPosPaymentsResponse?: shared.GetPosPaymentsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
