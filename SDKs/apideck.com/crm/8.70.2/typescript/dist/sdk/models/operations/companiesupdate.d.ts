import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompaniesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompaniesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CompaniesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CompaniesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CompaniesUpdateRequest extends SpeakeasyBase {
    pathParams: CompaniesUpdatePathParams;
    queryParams: CompaniesUpdateQueryParams;
    headers: CompaniesUpdateHeaders;
    request: shared.Company;
    security: CompaniesUpdateSecurity;
}
export declare class CompaniesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateCompanyResponse?: shared.UpdateCompanyResponse;
}
