import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class PostWebhooksIdPathParams extends SpeakeasyBase {
    id: string;
}
export declare class PostWebhooksIdRequest extends SpeakeasyBase {
    pathParams: PostWebhooksIdPathParams;
    request: shared.WebhookEntry;
}
export declare class PostWebhooksIdResponse extends SpeakeasyBase {
    contentType: string;
    error?: shared.Error;
    statusCode: number;
    webhook?: shared.Webhook;
}
