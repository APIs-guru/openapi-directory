import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class RemoveTenantWebhookPathParams extends SpeakeasyBase {
    webhookId: number;
}
export declare class RemoveTenantWebhookHeaders extends SpeakeasyBase {
    xSdsServiceToken?: string;
}
export declare class RemoveTenantWebhookRequest extends SpeakeasyBase {
    pathParams: RemoveTenantWebhookPathParams;
    headers: RemoveTenantWebhookHeaders;
}
export declare class RemoveTenantWebhookResponse extends SpeakeasyBase {
    contentType: string;
    errorResponse?: shared.ErrorResponse;
    statusCode: number;
}
