import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfiguration
/** 
 * Configures Amazon SNS notifications of available or expiring work items for work teams.
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=NotificationTopicArn" })
  notificationTopicArn?: string;
}
