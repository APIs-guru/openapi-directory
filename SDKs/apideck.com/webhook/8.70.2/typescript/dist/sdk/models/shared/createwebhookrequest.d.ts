import { SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export declare class CreateWebhookRequest extends SpeakeasyBase {
    deliveryUrl: string;
    description?: string;
    events: WebhookEventTypeEnum[];
    status: StatusEnum;
    unifiedApi: UnifiedApiIdEnum;
}
