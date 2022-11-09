import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebhooksDeletePathParams extends SpeakeasyBase {
    id: string;
}
export declare class WebhooksDeleteHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class WebhooksDeleteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksDeleteRequest extends SpeakeasyBase {
    pathParams: WebhooksDeletePathParams;
    headers: WebhooksDeleteHeaders;
    security: WebhooksDeleteSecurity;
}
export declare class WebhooksDeleteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    deleteWebhookResponse?: shared.DeleteWebhookResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
