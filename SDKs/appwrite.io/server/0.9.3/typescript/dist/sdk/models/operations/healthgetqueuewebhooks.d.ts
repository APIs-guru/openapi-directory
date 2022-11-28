import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class HealthGetQueueWebhooksSecurity extends SpeakeasyBase {
    key: shared.SchemeKey;
    project: shared.SchemeProject;
}
export declare class HealthGetQueueWebhooksRequest extends SpeakeasyBase {
    security: HealthGetQueueWebhooksSecurity;
}
export declare class HealthGetQueueWebhooksResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
