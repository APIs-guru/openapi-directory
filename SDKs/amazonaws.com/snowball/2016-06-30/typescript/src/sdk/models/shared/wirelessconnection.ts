import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// WirelessConnection
/** 
 * Configures the wireless connection on an AWS Snowcone device.
**/
export class WirelessConnection extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IsWifiEnabled" })
  isWifiEnabled?: boolean;
}
