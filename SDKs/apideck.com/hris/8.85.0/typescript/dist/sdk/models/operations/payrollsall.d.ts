import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayrollsAllQueryParams extends SpeakeasyBase {
    filter?: shared.PayrollsFilter;
    raw?: boolean;
}
export declare class PayrollsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PayrollsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PayrollsAllRequest extends SpeakeasyBase {
    queryParams: PayrollsAllQueryParams;
    headers: PayrollsAllHeaders;
    security: PayrollsAllSecurity;
}
export declare class PayrollsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getPayrollsResponse?: shared.GetPayrollsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
