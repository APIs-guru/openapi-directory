import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class SuppliersAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SuppliersAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SuppliersAddRequest extends SpeakeasyBase {
    queryParams: SuppliersAddQueryParams;
    headers: SuppliersAddHeaders;
    request: shared.SupplierInput;
    security: SuppliersAddSecurity;
}
export declare class SuppliersAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createSupplierResponse?: shared.CreateSupplierResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
