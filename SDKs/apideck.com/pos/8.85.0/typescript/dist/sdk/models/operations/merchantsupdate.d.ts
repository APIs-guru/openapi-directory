import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MerchantsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MerchantsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MerchantsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MerchantsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MerchantsUpdateRequest extends SpeakeasyBase {
    pathParams: MerchantsUpdatePathParams;
    queryParams: MerchantsUpdateQueryParams;
    headers: MerchantsUpdateHeaders;
    request: shared.MerchantInput;
    security: MerchantsUpdateSecurity;
}
export declare class MerchantsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateMerchantResponse?: shared.UpdateMerchantResponse;
}
