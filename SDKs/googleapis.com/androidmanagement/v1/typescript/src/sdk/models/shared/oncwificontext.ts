import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// OncWifiContext
/** 
 * Additional context for non-compliance related to Wi-Fi configuration.
**/
export class OncWifiContext extends SpeakeasyBase {
  @Metadata({ data: "json, name=wifiGuid" })
  wifiGuid?: string;
}
