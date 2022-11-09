import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MessagesDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesDeleteQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MessagesDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MessagesDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MessagesDeleteRequest extends SpeakeasyBase {
    pathParams: MessagesDeletePathParams;
    queryParams: MessagesDeleteQueryParams;
    headers: MessagesDeleteHeaders;
    security: MessagesDeleteSecurity;
}
export declare class MessagesDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteMessageResponse?: shared.DeleteMessageResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
