import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoicesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class InvoicesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoicesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoicesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoicesDeleteRequest extends SpeakeasyBase {
    pathParams: InvoicesDeletePathParams;
    queryParams: InvoicesDeleteQueryParams;
    headers: InvoicesDeleteHeaders;
    security: InvoicesDeleteSecurity;
}
export declare class InvoicesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteInvoiceResponse?: shared.DeleteInvoiceResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
