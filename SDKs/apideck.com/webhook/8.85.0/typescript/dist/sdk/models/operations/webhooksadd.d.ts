import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksAddHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class WebhooksAddSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksAddRequest extends SpeakeasyBase {
    headers: WebhooksAddHeaders;
    request: shared.CreateWebhookRequest;
    security: WebhooksAddSecurity;
}
export declare class WebhooksAddResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    createWebhookResponse?: shared.CreateWebhookResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
