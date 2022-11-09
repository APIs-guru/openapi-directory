import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class MessagesUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class MessagesUpdateQueryParams extends SpeakeasyBase {
    raw?: boolean;
}
export declare class MessagesUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
    xApideckConsumerId: string;
    xApideckServiceId?: string;
}
export declare class MessagesUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class MessagesUpdateRequest extends SpeakeasyBase {
    pathParams: MessagesUpdatePathParams;
    queryParams: MessagesUpdateQueryParams;
    headers: MessagesUpdateHeaders;
    request: shared.Message;
    security: MessagesUpdateSecurity;
}
export declare class MessagesUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateMessageResponse?: shared.UpdateMessageResponse;
}
