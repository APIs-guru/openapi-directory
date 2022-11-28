import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SuppliersDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SuppliersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SuppliersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SuppliersDeleteRequest extends SpeakeasyBase {
    pathParams: SuppliersDeletePathParams;
    queryParams: SuppliersDeleteQueryParams;
    headers: SuppliersDeleteHeaders;
    security: SuppliersDeleteSecurity;
}
export declare class SuppliersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteSupplierResponse?: shared.DeleteSupplierResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
