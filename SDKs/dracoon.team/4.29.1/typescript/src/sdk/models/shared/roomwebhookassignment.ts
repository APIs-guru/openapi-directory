import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// RoomWebhookAssignment
/** 
 * Request model for handling webhook assignments
**/
export class RoomWebhookAssignment extends SpeakeasyBase {
  @Metadata({ data: "json, name=isAssigned" })
  isAssigned: boolean;

  @Metadata({ data: "json, name=webhookId" })
  webhookId: number;
}
