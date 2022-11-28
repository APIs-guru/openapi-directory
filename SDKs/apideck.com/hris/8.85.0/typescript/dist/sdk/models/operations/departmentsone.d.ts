import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepartmentsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DepartmentsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DepartmentsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DepartmentsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DepartmentsOneRequest extends SpeakeasyBase {
    pathParams: DepartmentsOnePathParams;
    queryParams: DepartmentsOneQueryParams;
    headers: DepartmentsOneHeaders;
    security: DepartmentsOneSecurity;
}
export declare class DepartmentsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getDepartmentResponse?: shared.GetDepartmentResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
