import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateWebhookPathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class UpdateWebhookHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    pathParams: UpdateWebhookPathParams;
    headers: UpdateWebhookHeaders;
    request: shared.UpdateWebhookRequest;
}
export declare class UpdateWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
