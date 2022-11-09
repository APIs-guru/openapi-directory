import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// ActionLocalIpDetails
/** 
 * Provides information about the IP address where the scanned port is located.
**/
export class ActionLocalIpDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpAddressV4" })
  ipAddressV4?: string;
}
