import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ApplicantsOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class ApplicantsOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class ApplicantsOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class ApplicantsOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class ApplicantsOneRequest extends SpeakeasyBase {
    pathParams: ApplicantsOnePathParams;
    queryParams: ApplicantsOneQueryParams;
    headers: ApplicantsOneHeaders;
    security: ApplicantsOneSecurity;
}
export declare class ApplicantsOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getApplicantResponse?: shared.GetApplicantResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
