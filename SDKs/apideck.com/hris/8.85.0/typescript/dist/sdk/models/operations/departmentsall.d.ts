import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DepartmentsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class DepartmentsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class DepartmentsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class DepartmentsAllRequest extends SpeakeasyBase {
    queryParams: DepartmentsAllQueryParams;
    headers: DepartmentsAllHeaders;
    security: DepartmentsAllSecurity;
}
export declare class DepartmentsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getDepartmentsResponse?: shared.GetDepartmentsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
