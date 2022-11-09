import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ChromeOsDeviceAction
/** 
 * The data regarding an action to update the status of a Chrome OS device.
**/
export class ChromeOsDeviceAction extends SpeakeasyBase {
  @Metadata({ data: "json, name=action" })
  action?: string;

  @Metadata({ data: "json, name=deprovisionReason" })
  deprovisionReason?: string;
}
