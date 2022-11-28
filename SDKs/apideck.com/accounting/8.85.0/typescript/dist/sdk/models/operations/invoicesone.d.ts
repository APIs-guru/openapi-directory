import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoicesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class InvoicesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoicesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoicesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoicesOneRequest extends SpeakeasyBase {
    pathParams: InvoicesOnePathParams;
    queryParams: InvoicesOneQueryParams;
    headers: InvoicesOneHeaders;
    security: InvoicesOneSecurity;
}
export declare class InvoicesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getInvoiceResponse?: shared.GetInvoiceResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
