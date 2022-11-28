import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsAllPathParams extends SpeakeasyBase {
    employeeId: string;
}
export declare class JobsAllQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class JobsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class JobsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JobsAllRequest extends SpeakeasyBase {
    pathParams: JobsAllPathParams;
    queryParams: JobsAllQueryParams;
    headers: JobsAllHeaders;
    security: JobsAllSecurity;
}
export declare class JobsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getHrisJobsResponse?: shared.GetHrisJobsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
