import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class EmployeesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class EmployeesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeesDeleteRequest extends SpeakeasyBase {
    pathParams: EmployeesDeletePathParams;
    queryParams: EmployeesDeleteQueryParams;
    headers: EmployeesDeleteHeaders;
    security: EmployeesDeleteSecurity;
}
export declare class EmployeesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteEmployeeResponse?: shared.DeleteEmployeeResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
