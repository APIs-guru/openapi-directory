import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationScope
/** 
 * Notification scope information
**/
export class NotificationScope extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id: number;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;
}
