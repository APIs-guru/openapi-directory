import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksOnePathParams extends SpeakeasyBase {
    id: string;
}
export declare class WebhooksOneHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class WebhooksOneSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksOneRequest extends SpeakeasyBase {
    pathParams: WebhooksOnePathParams;
    headers: WebhooksOneHeaders;
    security: WebhooksOneSecurity;
}
export declare class WebhooksOneResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getWebhookResponse?: shared.GetWebhookResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
