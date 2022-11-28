import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksResolvePathParams extends SpeakeasyBase {
    id: string;
    serviceId: string;
}
export declare class WebhooksResolveQueryParams extends SpeakeasyBase {
    e?: string;
}
export declare class WebhooksResolveSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksResolveRequest extends SpeakeasyBase {
    pathParams: WebhooksResolvePathParams;
    queryParams: WebhooksResolveQueryParams;
    request: any;
    security: WebhooksResolveSecurity;
}
export declare class WebhooksResolveResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    resolveWebhookResponse?: shared.ResolveWebhookResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
