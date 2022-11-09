import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class CompaniesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.CompaniesFilter;
    limit?: number;
    raw?: boolean;
    sort?: shared.CompaniesSort;
}
export declare class CompaniesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CompaniesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CompaniesAllRequest extends SpeakeasyBase {
    queryParams: CompaniesAllQueryParams;
    headers: CompaniesAllHeaders;
    security: CompaniesAllSecurity;
}
export declare class CompaniesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getCompaniesResponse?: shared.GetCompaniesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
