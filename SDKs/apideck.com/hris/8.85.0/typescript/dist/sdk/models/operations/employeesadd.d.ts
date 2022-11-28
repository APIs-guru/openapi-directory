import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeesAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class EmployeesAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeesAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeesAddRequest extends SpeakeasyBase {
    queryParams: EmployeesAddQueryParams;
    headers: EmployeesAddHeaders;
    request: shared.EmployeeInput;
    security: EmployeesAddSecurity;
}
export declare class EmployeesAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createEmployeeResponse?: shared.CreateEmployeeResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
