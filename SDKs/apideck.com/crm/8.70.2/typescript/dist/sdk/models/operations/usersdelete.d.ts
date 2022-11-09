import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UsersDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UsersDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UsersDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsersDeleteRequest extends SpeakeasyBase {
    pathParams: UsersDeletePathParams;
    queryParams: UsersDeleteQueryParams;
    headers: UsersDeleteHeaders;
    security: UsersDeleteSecurity;
}
export declare class UsersDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteUserResponse?: shared.DeleteUserResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
