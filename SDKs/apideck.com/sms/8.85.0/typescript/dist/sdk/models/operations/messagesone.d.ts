import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MessagesOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesOneQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MessagesOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MessagesOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MessagesOneRequest extends SpeakeasyBase {
    pathParams: MessagesOnePathParams;
    queryParams: MessagesOneQueryParams;
    headers: MessagesOneHeaders;
    security: MessagesOneSecurity;
}
export declare class MessagesOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getMessageResponse?: shared.GetMessageResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
