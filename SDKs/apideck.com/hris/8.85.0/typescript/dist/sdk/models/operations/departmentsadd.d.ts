import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepartmentsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class DepartmentsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DepartmentsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DepartmentsAddRequest extends SpeakeasyBase {
    queryParams: DepartmentsAddQueryParams;
    headers: DepartmentsAddHeaders;
    request: shared.DepartmentInput;
    security: DepartmentsAddSecurity;
}
export declare class DepartmentsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createDepartmentResponse?: shared.CreateDepartmentResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
