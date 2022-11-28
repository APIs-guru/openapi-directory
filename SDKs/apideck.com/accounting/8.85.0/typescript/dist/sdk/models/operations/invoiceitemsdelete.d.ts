import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceItemsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class InvoiceItemsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoiceItemsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoiceItemsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoiceItemsDeleteRequest extends SpeakeasyBase {
    pathParams: InvoiceItemsDeletePathParams;
    queryParams: InvoiceItemsDeleteQueryParams;
    headers: InvoiceItemsDeleteHeaders;
    security: InvoiceItemsDeleteSecurity;
}
export declare class InvoiceItemsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteTaxRateResponse?: shared.DeleteTaxRateResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
