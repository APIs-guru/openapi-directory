import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CompanyInfoOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class CompanyInfoOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class CompanyInfoOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class CompanyInfoOneRequest extends SpeakeasyBase {
    queryParams: CompanyInfoOneQueryParams;
    headers: CompanyInfoOneHeaders;
    security: CompanyInfoOneSecurity;
}
export declare class CompanyInfoOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getCompanyInfoResponse?: shared.GetCompanyInfoResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
