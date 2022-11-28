import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetWebhookPathParams extends SpeakeasyBase {
    webhookId: string;
}
export declare class GetWebhookSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class GetWebhookRequest extends SpeakeasyBase {
    pathParams: GetWebhookPathParams;
    security: GetWebhookSecurity;
}
export declare class GetWebhookResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhook?: shared.Webhook;
}
