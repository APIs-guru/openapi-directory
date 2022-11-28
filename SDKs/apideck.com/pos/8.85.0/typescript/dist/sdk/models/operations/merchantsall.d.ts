import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MerchantsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class MerchantsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MerchantsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MerchantsAllRequest extends SpeakeasyBase {
    queryParams: MerchantsAllQueryParams;
    headers: MerchantsAllHeaders;
    security: MerchantsAllSecurity;
}
export declare class MerchantsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getMerchantsResponse?: shared.GetMerchantsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
