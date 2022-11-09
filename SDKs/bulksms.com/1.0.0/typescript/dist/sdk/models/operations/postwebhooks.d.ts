import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostWebhooksSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class PostWebhooksRequest extends SpeakeasyBase {
    request: shared.WebhookEntry;
    security: PostWebhooksSecurity;
}
export declare class PostWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    webhook?: shared.Webhook;
}
