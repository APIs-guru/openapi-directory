import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeeSchedulesAllPathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class EmployeeSchedulesAllQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class EmployeeSchedulesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeeSchedulesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeeSchedulesAllRequest extends SpeakeasyBase {
    pathParams: EmployeeSchedulesAllPathParams;
    queryParams: EmployeeSchedulesAllQueryParams;
    headers: EmployeeSchedulesAllHeaders;
    security: EmployeeSchedulesAllSecurity;
}
export declare class EmployeeSchedulesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getEmployeeSchedulesResponse?: shared.GetEmployeeSchedulesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
