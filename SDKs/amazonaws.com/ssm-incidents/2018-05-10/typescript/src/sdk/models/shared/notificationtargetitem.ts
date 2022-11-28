import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationTargetItem
/** 
 * The SNS targets that are notified when updates are made to an incident.
**/
export class NotificationTargetItem extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=snsTopicArn" })
  snsTopicArn?: string;
}
