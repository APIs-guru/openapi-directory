import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEc2NetworkInterfacePrivateIpAddressDetail
/** 
 * Provides information about a private IPv4 address that is with the network interface.
**/
export class AwsEc2NetworkInterfacePrivateIpAddressDetail extends SpeakeasyBase {
  @Metadata({ data: "json, name=PrivateDnsName" })
  privateDnsName?: string;

  @Metadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;
}
