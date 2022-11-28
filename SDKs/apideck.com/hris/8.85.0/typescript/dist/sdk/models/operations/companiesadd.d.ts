import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompaniesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CompaniesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CompaniesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CompaniesAddRequest extends SpeakeasyBase {
    queryParams: CompaniesAddQueryParams;
    headers: CompaniesAddHeaders;
    request: shared.HrisCompanyInput;
    security: CompaniesAddSecurity;
}
export declare class CompaniesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createHrisCompanyResponse?: shared.CreateHrisCompanyResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
