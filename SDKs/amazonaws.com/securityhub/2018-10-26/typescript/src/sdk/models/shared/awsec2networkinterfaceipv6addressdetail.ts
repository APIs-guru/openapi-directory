import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2NetworkInterfaceIpV6AddressDetail
/** 
 * Provides information about an IPV6 address that is associated with the network interface.
**/
export class AwsEc2NetworkInterfaceIpV6AddressDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=IpV6Address" })
  ipV6Address?: string;
}
