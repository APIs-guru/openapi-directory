import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxRatesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaxRatesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TaxRatesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TaxRatesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TaxRatesOneRequest extends SpeakeasyBase {
    pathParams: TaxRatesOnePathParams;
    queryParams: TaxRatesOneQueryParams;
    headers: TaxRatesOneHeaders;
    security: TaxRatesOneSecurity;
}
export declare class TaxRatesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getTaxRateResponse?: shared.GetTaxRateResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
