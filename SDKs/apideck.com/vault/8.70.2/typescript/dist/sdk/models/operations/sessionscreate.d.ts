import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class SessionsCreateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
}
export declare class SessionsCreateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class SessionsCreateRequest extends SpeakeasyBase {
    headers: SessionsCreateHeaders;
    request?: shared.Session;
    security: SessionsCreateSecurity;
}
export declare class SessionsCreateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createSessionResponse?: shared.CreateSessionResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
