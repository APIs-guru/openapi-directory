import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class EmployeesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class EmployeesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeesUpdateRequest extends SpeakeasyBase {
    pathParams: EmployeesUpdatePathParams;
    queryParams: EmployeesUpdateQueryParams;
    headers: EmployeesUpdateHeaders;
    request: shared.EmployeeInput;
    security: EmployeesUpdateSecurity;
}
export declare class EmployeesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateEmployeeResponse?: shared.UpdateEmployeeResponse;
}
