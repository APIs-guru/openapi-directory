import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeePayrollsOnePathParams extends SpeakeasyBase {
    employeeId: string;
    payrollId: string;
}
export declare class EmployeePayrollsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class EmployeePayrollsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeePayrollsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeePayrollsOneRequest extends SpeakeasyBase {
    pathParams: EmployeePayrollsOnePathParams;
    queryParams: EmployeePayrollsOneQueryParams;
    headers: EmployeePayrollsOneHeaders;
    security: EmployeePayrollsOneSecurity;
}
export declare class EmployeePayrollsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getEmployeePayrollResponse?: shared.GetEmployeePayrollResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
