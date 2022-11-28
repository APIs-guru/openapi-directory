import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetTenantWebhookLifetimePathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class ResetTenantWebhookLifetimeHeaders extends SpeakeasyBase {
    xSdsDateFormat?: any;
    xSdsServiceToken?: string;
}
export declare class ResetTenantWebhookLifetimeRequest extends SpeakeasyBase {
    pathParams: ResetTenantWebhookLifetimePathParams;
    headers: ResetTenantWebhookLifetimeHeaders;
}
export declare class ResetTenantWebhookLifetimeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
