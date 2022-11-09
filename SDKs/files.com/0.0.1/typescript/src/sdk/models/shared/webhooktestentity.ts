import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AutoEntity } from "./autoentity";


// WebhookTestEntity
/** 
 * Create Webhook Test
**/
export class WebhookTestEntity extends SpeakeasyBase {
  @Metadata({ data: "json, name=code" })
  code?: number;

  @Metadata({ data: "json, name=data" })
  data?: AutoEntity;

  @Metadata({ data: "json, name=message" })
  message?: string;

  @Metadata({ data: "json, name=status" })
  status?: string;

  @Metadata({ data: "json, name=success" })
  success?: boolean;
}
