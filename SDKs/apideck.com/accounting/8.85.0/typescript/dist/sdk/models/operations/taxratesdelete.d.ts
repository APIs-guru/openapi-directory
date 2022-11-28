import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxRatesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class TaxRatesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class TaxRatesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TaxRatesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TaxRatesDeleteRequest extends SpeakeasyBase {
    pathParams: TaxRatesDeletePathParams;
    queryParams: TaxRatesDeleteQueryParams;
    headers: TaxRatesDeleteHeaders;
    security: TaxRatesDeleteSecurity;
}
export declare class TaxRatesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteTaxRateResponse?: shared.DeleteTaxRateResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
