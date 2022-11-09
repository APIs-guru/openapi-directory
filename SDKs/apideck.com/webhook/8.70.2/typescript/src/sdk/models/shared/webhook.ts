import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { WebhookEventTypeEnum } from "./webhookeventtypeenum";
import { StatusEnum } from "./statusenum";
import { UnifiedApiIdEnum } from "./unifiedapiidenum";


export class Webhook extends SpeakeasyBase {
  @Metadata({ data: "json, name=created_at" })
  createdAt?: Date;

  @Metadata({ data: "json, name=delivery_url" })
  deliveryUrl: string;

  @Metadata({ data: "json, name=description" })
  description?: string;

  @Metadata({ data: "json, name=events" })
  events: WebhookEventTypeEnum[];

  @Metadata({ data: "json, name=execute_base_url" })
  executeBaseUrl: string;

  @Metadata({ data: "json, name=id" })
  id?: string;

  @Metadata({ data: "json, name=status" })
  status: StatusEnum;

  @Metadata({ data: "json, name=unified_api" })
  unifiedApi: UnifiedApiIdEnum;

  @Metadata({ data: "json, name=updated_at" })
  updatedAt?: Date;
}
