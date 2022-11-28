import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class SuppliersAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class SuppliersAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class SuppliersAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SuppliersAllRequest extends SpeakeasyBase {
    queryParams: SuppliersAllQueryParams;
    headers: SuppliersAllHeaders;
    security: SuppliersAllSecurity;
}
export declare class SuppliersAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getSuppliersResponse?: shared.GetSuppliersResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
