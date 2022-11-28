import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Notification } from "./notification";



// Settings
/** 
 * Customer-level settings.
**/
export class Settings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=notifications", elemType: Notification })
  notifications?: Notification[];
}
