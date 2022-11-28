import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MerchantsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MerchantsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MerchantsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MerchantsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MerchantsDeleteRequest extends SpeakeasyBase {
    pathParams: MerchantsDeletePathParams;
    queryParams: MerchantsDeleteQueryParams;
    headers: MerchantsDeleteHeaders;
    security: MerchantsDeleteSecurity;
}
export declare class MerchantsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteMerchantResponse?: shared.DeleteMerchantResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
