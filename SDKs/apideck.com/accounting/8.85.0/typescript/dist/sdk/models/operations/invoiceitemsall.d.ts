import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceItemsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.InvoiceItemsFilter;
    limit?: number;
    raw?: boolean;
}
export declare class InvoiceItemsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoiceItemsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoiceItemsAllRequest extends SpeakeasyBase {
    queryParams: InvoiceItemsAllQueryParams;
    headers: InvoiceItemsAllHeaders;
    security: InvoiceItemsAllSecurity;
}
export declare class InvoiceItemsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getInvoiceItemsResponse?: shared.GetInvoiceItemsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
