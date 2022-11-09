import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// NotificationScope
/** 
 * Notification scope information
**/
export class NotificationScope extends SpeakeasyBase {
  @Metadata({ data: "json, name=id" })
  id: number;

  @Metadata({ data: "json, name=name" })
  name: string;
}
