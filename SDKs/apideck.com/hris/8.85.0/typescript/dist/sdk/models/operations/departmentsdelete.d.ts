import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepartmentsDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DepartmentsDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DepartmentsDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DepartmentsDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DepartmentsDeleteRequest extends SpeakeasyBase {
    pathParams: DepartmentsDeletePathParams;
    queryParams: DepartmentsDeleteQueryParams;
    headers: DepartmentsDeleteHeaders;
    security: DepartmentsDeleteSecurity;
}
export declare class DepartmentsDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteDepartmentResponse?: shared.DeleteDepartmentResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
