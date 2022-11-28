import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksUpdatePathParams extends SpeakeasyBase {
    id: string;
}
export declare class WebhooksUpdateHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class WebhooksUpdateSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksUpdateRequest extends SpeakeasyBase {
    pathParams: WebhooksUpdatePathParams;
    headers: WebhooksUpdateHeaders;
    request: shared.UpdateWebhookRequest;
    security: WebhooksUpdateSecurity;
}
export declare class WebhooksUpdateResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
    updateWebhookResponse?: shared.UpdateWebhookResponse;
}
