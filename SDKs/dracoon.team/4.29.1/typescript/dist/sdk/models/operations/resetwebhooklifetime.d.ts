import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ResetWebhookLifetimePathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class ResetWebhookLifetimeHeaders extends SpeakeasyBase {
    xSdsAuthToken?: string;
    xSdsDateFormat?: any;
}
export declare class ResetWebhookLifetimeRequest extends SpeakeasyBase {
    pathParams: ResetWebhookLifetimePathParams;
    headers: ResetWebhookLifetimeHeaders;
}
export declare class ResetWebhookLifetimeResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
    webhook?: shared.Webhook;
}
