import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeePayrollsAllPathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class EmployeePayrollsAllQueryParams extends SpeakeasyBase {
    filter?: shared.PayrollsFilter;
    raw?: boolean;
}
export declare class EmployeePayrollsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeePayrollsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeePayrollsAllRequest extends SpeakeasyBase {
    pathParams: EmployeePayrollsAllPathParams;
    queryParams: EmployeePayrollsAllQueryParams;
    headers: EmployeePayrollsAllHeaders;
    security: EmployeePayrollsAllSecurity;
}
export declare class EmployeePayrollsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getEmployeePayrollsResponse?: shared.GetEmployeePayrollsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
