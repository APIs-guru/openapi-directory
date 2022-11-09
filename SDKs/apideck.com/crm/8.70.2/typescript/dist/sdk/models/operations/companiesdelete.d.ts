import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompaniesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class CompaniesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CompaniesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CompaniesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CompaniesDeleteRequest extends SpeakeasyBase {
    pathParams: CompaniesDeletePathParams;
    queryParams: CompaniesDeleteQueryParams;
    headers: CompaniesDeleteHeaders;
    security: CompaniesDeleteSecurity;
}
export declare class CompaniesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteCompanyResponse?: shared.DeleteCompanyResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
