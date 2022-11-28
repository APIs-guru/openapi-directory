import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceItemsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class InvoiceItemsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoiceItemsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoiceItemsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoiceItemsOneRequest extends SpeakeasyBase {
    pathParams: InvoiceItemsOnePathParams;
    queryParams: InvoiceItemsOneQueryParams;
    headers: InvoiceItemsOneHeaders;
    security: InvoiceItemsOneSecurity;
}
export declare class InvoiceItemsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getInvoiceItemResponse?: shared.GetInvoiceItemResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
