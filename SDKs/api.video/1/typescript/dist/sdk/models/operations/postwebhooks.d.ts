import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PostWebhooksSecurity extends SpeakeasyBase {
    bearerAuth: shared.SchemeBearerAuth;
}
export declare class PostWebhooksRequest extends SpeakeasyBase {
    request?: shared.WebhooksCreatePayload;
    security: PostWebhooksSecurity;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    badRequest?: shared.BadRequest;
    webhook?: shared.Webhook;
}
