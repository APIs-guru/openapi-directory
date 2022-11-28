import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicantsAddQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ApplicantsAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ApplicantsAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApplicantsAddRequest extends SpeakeasyBase {
    queryParams: ApplicantsAddQueryParams;
    headers: ApplicantsAddHeaders;
    request: shared.ApplicantInput;
    security: ApplicantsAddSecurity;
}
export declare class ApplicantsAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createApplicantResponse?: shared.CreateApplicantResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
