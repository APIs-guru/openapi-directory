import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class CreateTenantWebhookHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class CreateTenantWebhookRequest extends SpeakeasyBase {
    headers: CreateTenantWebhookHeaders;
    request: shared.CreateWebhookRequest;
}
export declare class CreateTenantWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
