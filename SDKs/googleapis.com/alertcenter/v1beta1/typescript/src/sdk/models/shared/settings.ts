import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Notification } from "./notification";


// Settings
/** 
 * Customer-level settings.
**/
export class Settings extends SpeakeasyBase {
  @Metadata({ data: "json, name=notifications", elemType: shared.Notification })
  notifications?: Notification[];
}
