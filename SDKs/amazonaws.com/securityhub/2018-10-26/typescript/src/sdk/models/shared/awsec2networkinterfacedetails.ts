import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2NetworkInterfaceAttachment } from "./awsec2networkinterfaceattachment";
import { AwsEc2NetworkInterfaceIpV6AddressDetail } from "./awsec2networkinterfaceipv6addressdetail";
import { AwsEc2NetworkInterfacePrivateIpAddressDetail } from "./awsec2networkinterfaceprivateipaddressdetail";
import { AwsEc2NetworkInterfaceSecurityGroup } from "./awsec2networkinterfacesecuritygroup";



// AwsEc2NetworkInterfaceDetails
/** 
 * Details about the network interface
**/
export class AwsEc2NetworkInterfaceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Attachment" })
  attachment?: AwsEc2NetworkInterfaceAttachment;

  @SpeakeasyMetadata({ data: "json, name=IpV6Addresses", elemType: AwsEc2NetworkInterfaceIpV6AddressDetail })
  ipV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];

  @SpeakeasyMetadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @SpeakeasyMetadata({ data: "json, name=PrivateIpAddresses", elemType: AwsEc2NetworkInterfacePrivateIpAddressDetail })
  privateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];

  @SpeakeasyMetadata({ data: "json, name=PublicDnsName" })
  publicDnsName?: string;

  @SpeakeasyMetadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups", elemType: AwsEc2NetworkInterfaceSecurityGroup })
  securityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];

  @SpeakeasyMetadata({ data: "json, name=SourceDestCheck" })
  sourceDestCheck?: boolean;
}
