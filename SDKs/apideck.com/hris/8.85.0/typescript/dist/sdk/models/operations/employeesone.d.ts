import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class EmployeesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class EmployeesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeesOneRequest extends SpeakeasyBase {
    pathParams: EmployeesOnePathParams;
    queryParams: EmployeesOneQueryParams;
    headers: EmployeesOneHeaders;
    security: EmployeesOneSecurity;
}
export declare class EmployeesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getEmployeeResponse?: shared.GetEmployeeResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
