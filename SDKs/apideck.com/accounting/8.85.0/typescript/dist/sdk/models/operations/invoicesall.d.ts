import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class InvoicesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
    sort?: shared.InvoicesSort;
}
export declare class InvoicesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class InvoicesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class InvoicesAllRequest extends SpeakeasyBase {
    queryParams: InvoicesAllQueryParams;
    headers: InvoicesAllHeaders;
    security: InvoicesAllSecurity;
}
export declare class InvoicesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getInvoicesResponse?: shared.GetInvoicesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
