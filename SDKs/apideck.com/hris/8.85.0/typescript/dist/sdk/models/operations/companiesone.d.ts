import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompaniesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompaniesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CompaniesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CompaniesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CompaniesOneRequest extends SpeakeasyBase {
    pathParams: CompaniesOnePathParams;
    queryParams: CompaniesOneQueryParams;
    headers: CompaniesOneHeaders;
    security: CompaniesOneSecurity;
}
export declare class CompaniesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getHrisCompanyResponse?: shared.GetHrisCompanyResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
