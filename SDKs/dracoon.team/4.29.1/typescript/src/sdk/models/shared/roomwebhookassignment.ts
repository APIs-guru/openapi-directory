import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// RoomWebhookAssignment
/** 
 * Request model for handling webhook assignments
**/
export class RoomWebhookAssignment extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=isAssigned" })
  isAssigned: boolean;

  @SpeakeasyMetadata({ data: "json, name=webhookId" })
  webhookId: number;
}
