import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationConfig } from "./notificationconfig";


// NotificationConfigList
/** 
 * List of notification configurations
**/
export class NotificationConfigList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.NotificationConfig })
  items: NotificationConfig[];
}
