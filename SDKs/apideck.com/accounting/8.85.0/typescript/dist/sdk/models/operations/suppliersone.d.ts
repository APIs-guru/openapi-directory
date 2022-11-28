import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SuppliersOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SuppliersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SuppliersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SuppliersOneRequest extends SpeakeasyBase {
    pathParams: SuppliersOnePathParams;
    queryParams: SuppliersOneQueryParams;
    headers: SuppliersOneHeaders;
    security: SuppliersOneSecurity;
}
export declare class SuppliersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getSupplierResponse?: shared.GetSupplierResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
