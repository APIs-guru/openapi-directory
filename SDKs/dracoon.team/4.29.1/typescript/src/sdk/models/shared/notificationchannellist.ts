import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationChannel } from "./notificationchannel";



// NotificationChannelList
/** 
 * List of notification channels
**/
export class NotificationChannelList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: NotificationChannel })
  items: NotificationChannel[];
}
