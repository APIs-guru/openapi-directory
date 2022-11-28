import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceItemsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoiceItemsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoiceItemsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoiceItemsAddRequest extends SpeakeasyBase {
    queryParams: InvoiceItemsAddQueryParams;
    headers: InvoiceItemsAddHeaders;
    request: shared.InvoiceItemInput;
    security: InvoiceItemsAddSecurity;
}
export declare class InvoiceItemsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createInvoiceItemResponse?: shared.CreateInvoiceItemResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
