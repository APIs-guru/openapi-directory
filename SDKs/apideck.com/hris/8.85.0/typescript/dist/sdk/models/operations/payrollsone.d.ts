import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PayrollsOnePathParams extends SpeakeasyBase {
    payrollId: string;
}
export declare class PayrollsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class PayrollsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class PayrollsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class PayrollsOneRequest extends SpeakeasyBase {
    pathParams: PayrollsOnePathParams;
    queryParams: PayrollsOneQueryParams;
    headers: PayrollsOneHeaders;
    security: PayrollsOneSecurity;
}
export declare class PayrollsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getPayrollResponse?: shared.GetPayrollResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
