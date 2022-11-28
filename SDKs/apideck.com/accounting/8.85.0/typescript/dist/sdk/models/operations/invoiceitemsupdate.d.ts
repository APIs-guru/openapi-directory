import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoiceItemsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class InvoiceItemsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class InvoiceItemsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoiceItemsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoiceItemsUpdateRequest extends SpeakeasyBase {
    pathParams: InvoiceItemsUpdatePathParams;
    queryParams: InvoiceItemsUpdateQueryParams;
    headers: InvoiceItemsUpdateHeaders;
    request: shared.InvoiceItemInput;
    security: InvoiceItemsUpdateSecurity;
}
export declare class InvoiceItemsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateInvoiceItemsResponse?: shared.UpdateInvoiceItemsResponse;
}
