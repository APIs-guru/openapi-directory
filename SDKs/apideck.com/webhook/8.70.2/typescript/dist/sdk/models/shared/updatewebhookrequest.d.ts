import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";
export declare class UpdateWebhookRequest extends SpeakeasyBase {
    deliveryUrl?: string;
    description?: string;
    events?: WebhookEventTypeEnum[];
    status?: StatusEnum;
}
