import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class UpdateTenantWebhookPathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class UpdateTenantWebhookHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class UpdateTenantWebhookRequest extends SpeakeasyBase {
    pathParams: UpdateTenantWebhookPathParams;
    headers: UpdateTenantWebhookHeaders;
    request: shared.UpdateWebhookRequest;
}
export declare class UpdateTenantWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
