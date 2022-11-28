import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";



export class Webhook extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @SpeakeasyMetadata({ data: "json, name=delivery_url" })
  deliveryUrl: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events: WebhookEventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=execute_base_url" })
  executeBaseUrl: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status: StatusEnum;

  @SpeakeasyMetadata({ data: "json, name=unified_api" })
  unifiedApi: UnifiedApiIdEnum;

  @SpeakeasyMetadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
