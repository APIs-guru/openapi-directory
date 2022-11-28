import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationConfig } from "./notificationconfig";



// NotificationConfigList
/** 
 * List of notification configurations
**/
export class NotificationConfigList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: NotificationConfig })
  items: NotificationConfig[];
}
