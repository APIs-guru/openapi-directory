import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ChromeOsDeviceAction
/** 
 * Data about an update to the status of a Chrome OS device.
**/
export class ChromeOsDeviceAction extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=action" })
  action?: string;

  @SpeakeasyMetadata({ data: "json, name=deprovisionReason" })
  deprovisionReason?: string;
}
