import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxRatesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaxRatesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TaxRatesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TaxRatesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TaxRatesUpdateRequest extends SpeakeasyBase {
    pathParams: TaxRatesUpdatePathParams;
    queryParams: TaxRatesUpdateQueryParams;
    headers: TaxRatesUpdateHeaders;
    request: shared.TaxRateInput;
    security: TaxRatesUpdateSecurity;
}
export declare class TaxRatesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateTaxRateResponse?: shared.UpdateTaxRateResponse;
}
