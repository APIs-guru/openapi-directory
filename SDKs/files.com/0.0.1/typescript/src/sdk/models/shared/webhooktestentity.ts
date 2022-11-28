import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AutoEntity } from "./autoentity";



// WebhookTestEntity
/** 
 * Create Webhook Test
**/
export class WebhookTestEntity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=code" })
  code?: number;

  @SpeakeasyMetadata({ data: "json, name=data" })
  data?: AutoEntity;

  @SpeakeasyMetadata({ data: "json, name=message" })
  message?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;

  @SpeakeasyMetadata({ data: "json, name=success" })
  success?: boolean;
}
