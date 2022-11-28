import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// ActionLocalIpDetails
/** 
 * Provides information about the IP address where the scanned port is located.
**/
export class ActionLocalIpDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=IpAddressV4" })
  ipAddressV4?: string;
}
