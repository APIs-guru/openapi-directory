import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoicesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoicesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoicesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoicesAddRequest extends SpeakeasyBase {
    queryParams: InvoicesAddQueryParams;
    headers: InvoicesAddHeaders;
    request: shared.InvoiceInput;
    security: InvoicesAddSecurity;
}
export declare class InvoicesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createInvoiceResponse?: shared.CreateInvoiceResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
