import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoicesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class InvoicesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoicesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoicesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoicesUpdateRequest extends SpeakeasyBase {
    pathParams: InvoicesUpdatePathParams;
    queryParams: InvoicesUpdateQueryParams;
    headers: InvoicesUpdateHeaders;
    request: shared.InvoiceInput;
    security: InvoicesUpdateSecurity;
}
export declare class InvoicesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateInvoiceResponse?: shared.UpdateInvoiceResponse;
}
