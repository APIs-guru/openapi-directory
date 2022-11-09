import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class UsersUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class UsersUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class UsersUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UsersUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsersUpdateRequest extends SpeakeasyBase {
    pathParams: UsersUpdatePathParams;
    queryParams: UsersUpdateQueryParams;
    headers: UsersUpdateHeaders;
    request: shared.User;
    security: UsersUpdateSecurity;
}
export declare class UsersUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateUserResponse?: shared.UpdateUserResponse;
}
