import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationConfiguration
/** 
 * Configures Amazon SNS notifications of available or expiring work items for work teams.
**/
export class NotificationConfiguration extends SpeakeasyBase {
  @Metadata({ data: "json, name=NotificationTopicArn" })
  notificationTopicArn?: string;
}
