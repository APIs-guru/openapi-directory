import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// OncWifiContext
/** 
 * Additional context for non-compliance related to Wi-Fi configuration.
**/
export class OncWifiContext extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=wifiGuid" })
  wifiGuid?: string;
}
