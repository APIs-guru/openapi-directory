import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApisAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.ApisFilter;
    limit?: number;
}
export declare class ApisAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class ApisAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApisAllRequest extends SpeakeasyBase {
    queryParams: ApisAllQueryParams;
    headers: ApisAllHeaders;
    security: ApisAllSecurity;
}
export declare class ApisAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getApisResponse?: shared.GetApisResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
}
