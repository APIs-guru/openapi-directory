import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class WebhooksAllQueryParams extends SpeakeasyBase {
    cursor?: string;
    limit?: number;
}
export declare class WebhooksAllHeaders extends SpeakeasyBase {
    xApideckAppId: string;
}
export declare class WebhooksAllSecurity extends SpeakeasyBase {
    apiKey: shared.SchemeApiKey;
}
export declare class WebhooksAllRequest extends SpeakeasyBase {
    queryParams: WebhooksAllQueryParams;
    headers: WebhooksAllHeaders;
    security: WebhooksAllSecurity;
}
export declare class WebhooksAllResponse extends SpeakeasyBase {
    badRequestResponse?: shared.BadRequestResponse;
    contentType: string;
    getWebhooksResponse?: shared.GetWebhooksResponse;
    notFoundResponse?: shared.NotFoundResponse;
    paymentRequiredResponse?: shared.PaymentRequiredResponse;
    statusCode: number;
    unauthorizedResponse?: shared.UnauthorizedResponse;
    unexpectedErrorResponse?: shared.UnexpectedErrorResponse;
    unprocessableResponse?: shared.UnprocessableResponse;
}
