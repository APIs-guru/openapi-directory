import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class EmployeesAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.EmployeesFilter;
    limit?: number;
    raw?: boolean;
}
export declare class EmployeesAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class EmployeesAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class EmployeesAllRequest extends SpeakeasyBase {
    queryParams: EmployeesAllQueryParams;
    headers: EmployeesAllHeaders;
    security: EmployeesAllSecurity;
}
export declare class EmployeesAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getEmployeesResponse?: shared.GetEmployeesResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
