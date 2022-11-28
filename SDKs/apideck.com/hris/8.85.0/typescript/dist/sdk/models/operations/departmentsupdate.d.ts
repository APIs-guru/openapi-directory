import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepartmentsUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class DepartmentsUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DepartmentsUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DepartmentsUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DepartmentsUpdateRequest extends SpeakeasyBase {
    pathParams: DepartmentsUpdatePathParams;
    queryParams: DepartmentsUpdateQueryParams;
    headers: DepartmentsUpdateHeaders;
    request: shared.DepartmentInput;
    security: DepartmentsUpdateSecurity;
}
export declare class DepartmentsUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateDepartmentResponse?: shared.UpdateDepartmentResponse;
}
