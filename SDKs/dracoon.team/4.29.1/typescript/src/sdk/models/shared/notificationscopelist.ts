import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { NotificationScope } from "./notificationscope";



// NotificationScopeList
/** 
 * List of notification scopes
**/
export class NotificationScopeList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=items", elemType: NotificationScope })
  items: NotificationScope[];
}
