import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class TaxRatesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.TaxRatesFilter;
    limit?: number;
    raw?: boolean;
}
export declare class TaxRatesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class TaxRatesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class TaxRatesAllRequest extends SpeakeasyBase {
    queryParams: TaxRatesAllQueryParams;
    headers: TaxRatesAllHeaders;
    security: TaxRatesAllSecurity;
}
export declare class TaxRatesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getTaxRatesResponse?: shared.GetTaxRatesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
