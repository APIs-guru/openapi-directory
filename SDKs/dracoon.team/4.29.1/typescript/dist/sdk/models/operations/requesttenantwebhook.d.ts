import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RequestTenantWebhookPathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class RequestTenantWebhookHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class RequestTenantWebhookRequest extends SpeakeasyBase {
    pathParams: RequestTenantWebhookPathParams;
    headers: RequestTenantWebhookHeaders;
}
export declare class RequestTenantWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
