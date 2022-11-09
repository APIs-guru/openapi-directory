import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// WirelessConnection
/** 
 * Configures the wireless connection on an AWS Snowcone device.
**/
export class WirelessConnection extends SpeakeasyBase {
  @Metadata({ data: "json, name=IsWifiEnabled" })
  isWifiEnabled?: boolean;
}
