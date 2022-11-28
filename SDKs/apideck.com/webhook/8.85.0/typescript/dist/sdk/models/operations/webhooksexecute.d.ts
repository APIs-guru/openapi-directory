import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksExecutePathParams extends SpeakeasyBase {
    id: string;
    serviceId: string;
}
export declare class WebhooksExecuteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksExecuteRequest extends SpeakeasyBase {
    pathParams: WebhooksExecutePathParams;
    request: any;
    security: WebhooksExecuteSecurity;
}
export declare class WebhooksExecuteResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    executeWebhookResponse?: shared.ExecuteWebhookResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
