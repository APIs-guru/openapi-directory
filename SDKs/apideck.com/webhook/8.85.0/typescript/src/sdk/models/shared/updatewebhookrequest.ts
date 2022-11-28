import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";



export class UpdateWebhookRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=delivery_url" })
  deliveryUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=description" })
  description?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: WebhookEventTypeEnum[];

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: StatusEnum;
}
