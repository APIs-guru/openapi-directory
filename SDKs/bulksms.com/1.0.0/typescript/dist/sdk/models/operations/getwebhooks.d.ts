import { SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
export declare class GetWebhooksSecurity extends SpeakeasyBase {
    basicAuth: shared.SchemeBasicAuth;
}
export declare class GetWebhooksRequest extends SpeakeasyBase {
    security: GetWebhooksSecurity;
}
export declare class GetWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    webhooks?: shared.Webhook[];
}
