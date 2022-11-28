import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxRatesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TaxRatesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TaxRatesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TaxRatesAddRequest extends SpeakeasyBase {
    queryParams: TaxRatesAddQueryParams;
    headers: TaxRatesAddHeaders;
    request: shared.TaxRateInput;
    security: TaxRatesAddSecurity;
}
export declare class TaxRatesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createTaxRateResponse?: shared.CreateTaxRateResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
