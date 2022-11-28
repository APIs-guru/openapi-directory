import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEc2NetworkInterfacePrivateIpAddressDetail
/** 
 * Provides information about a private IPv4 address that is with the network interface.
**/
export class AwsEc2NetworkInterfacePrivateIpAddressDetail extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=PrivateDnsName" })
  privateDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateIpAddress" })
  privateIpAddress?: string;
}
