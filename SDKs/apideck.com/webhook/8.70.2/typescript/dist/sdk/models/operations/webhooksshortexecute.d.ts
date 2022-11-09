import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class WebhooksShortExecutePathParams extends SpeakeasyBase {
    id: string;
    serviceId: string;
}
export declare class WebhooksShortExecuteSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksShortExecuteRequest extends SpeakeasyBase {
    pathParams: WebhooksShortExecutePathParams;
    request: any;
    security: WebhooksShortExecuteSecurity;
}
export declare class WebhooksShortExecuteResponse extends SpeakeasyBase {
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
