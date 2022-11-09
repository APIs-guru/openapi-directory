import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationTargetItem
/** 
 * The SNS targets that are notified when updates are made to an incident.
**/
export class NotificationTargetItem extends SpeakeasyBase {
  @Metadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;
}
