import { SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";
export declare class Webhook extends SpeakeasyBase {
    createdAt?: Date;
    deliveryUrl: string;
    description?: string;
    events: WebhookEventTypeEnum[];
    executeBaseUrl: string;
    id?: string;
    status: StatusEnum;
    unifiedApi: UnifiedApiIdEnum;
    updatedAt?: Date;
}
