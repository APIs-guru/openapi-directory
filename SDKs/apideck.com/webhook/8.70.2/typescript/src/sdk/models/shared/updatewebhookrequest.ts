import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";


export class UpdateWebhookRequest extends SpeakeasyBase {
  @Metadata({ data: "json, name=delivery_url" })
  deliveryUrl?: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events" })
  events?: WebhookEventTypeEnum[];

  @Metadata({ data: "json, name=status" })
  status?: StatusEnum;
}
