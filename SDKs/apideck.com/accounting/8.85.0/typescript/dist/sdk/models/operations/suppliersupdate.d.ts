import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class SuppliersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SuppliersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SuppliersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SuppliersUpdateRequest extends SpeakeasyBase {
    pathParams: SuppliersUpdatePathParams;
    queryParams: SuppliersUpdateQueryParams;
    headers: SuppliersUpdateHeaders;
    request: shared.SupplierInput;
    security: SuppliersUpdateSecurity;
}
export declare class SuppliersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateSupplierResponse?: shared.UpdateSupplierResponse;
}
