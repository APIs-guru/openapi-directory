import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { NotificationScope } from "./notificationscope";


// NotificationScopeList
/** 
 * List of notification scopes
**/
export class NotificationScopeList extends SpeakeasyBase {
  @Metadata({ data: "json, name=items", elemType: shared.NotificationScope })
  items: NotificationScope[];
}
