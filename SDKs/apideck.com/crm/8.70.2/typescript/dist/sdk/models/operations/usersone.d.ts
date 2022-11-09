import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UsersOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UsersOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UsersOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsersOneRequest extends SpeakeasyBase {
    pathParams: UsersOnePathParams;
    queryParams: UsersOneQueryParams;
    headers: UsersOneHeaders;
    security: UsersOneSecurity;
}
export declare class UsersOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getUserResponse?: shared.GetUserResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
