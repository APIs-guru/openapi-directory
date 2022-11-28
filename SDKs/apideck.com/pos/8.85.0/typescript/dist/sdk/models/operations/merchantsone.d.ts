import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MerchantsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MerchantsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MerchantsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MerchantsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MerchantsOneRequest extends SpeakeasyBase {
    pathParams: MerchantsOnePathParams;
    queryParams: MerchantsOneQueryParams;
    headers: MerchantsOneHeaders;
    security: MerchantsOneSecurity;
}
export declare class MerchantsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getMerchantResponse?: shared.GetMerchantResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
