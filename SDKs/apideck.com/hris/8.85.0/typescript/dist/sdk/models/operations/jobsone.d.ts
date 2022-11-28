import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class JobsOnePathParams extends SpeakeasyBase {
    employeeId: string;
    jobId: string;
}
export declare class JobsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class JobsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class JobsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class JobsOneRequest extends SpeakeasyBase {
    pathParams: JobsOnePathParams;
    queryParams: JobsOneQueryParams;
    headers: JobsOneHeaders;
    security: JobsOneSecurity;
}
export declare class JobsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getHrisJobResponse?: shared.GetHrisJobResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
