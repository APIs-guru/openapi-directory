import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicantsAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    filter?: shared.JobsFilter;
    limit?: number;
    raw?: boolean;
}
export declare class ApplicantsAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ApplicantsAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApplicantsAllRequest extends SpeakeasyBase {
    queryParams: ApplicantsAllQueryParams;
    headers: ApplicantsAllHeaders;
    security: ApplicantsAllSecurity;
}
export declare class ApplicantsAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getApplicantsResponse?: shared.GetApplicantsResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
