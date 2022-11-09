import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationChannel } from "./notificationchannel";


// NotificationChannelList
/** 
 * List of notification channels
**/
export class NotificationChannelList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.NotificationChannel })
  items: NotificationChannel[];
}
