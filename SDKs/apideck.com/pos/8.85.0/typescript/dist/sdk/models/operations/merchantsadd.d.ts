import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MerchantsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MerchantsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MerchantsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MerchantsAddRequest extends SpeakeasyBase {
    queryParams: MerchantsAddQueryParams;
    headers: MerchantsAddHeaders;
    request: shared.MerchantInput;
    security: MerchantsAddSecurity;
}
export declare class MerchantsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createMerchantResponse?: shared.CreateMerchantResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
