import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestWebhookPathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class RequestWebhookHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class RequestWebhookRequest extends SpeakeasyBase {
    pathParams: RequestWebhookPathParams;
    headers: RequestWebhookHeaders;
}
export declare class RequestWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
