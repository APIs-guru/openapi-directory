import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UsersAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
    raw?: boolean;
}
export declare class UsersAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class UsersAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class UsersAllRequest extends SpeakeasyBase {
    queryParams: UsersAllQueryParams;
    headers: UsersAllHeaders;
    security: UsersAllSecurity;
}
export declare class UsersAllResponseOutput extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getUsersResponse?: shared.GetUsersResponseOutput;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
