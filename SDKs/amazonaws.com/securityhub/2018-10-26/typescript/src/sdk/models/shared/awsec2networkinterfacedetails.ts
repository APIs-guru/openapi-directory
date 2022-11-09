import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEc2NetworkInterfaceAttachment } from "./awsec2networkinterfaceattachment";
import { AwsEc2NetworkInterfaceIpV6AddressDetail } from "./awsec2networkinterfaceipv6addressdetail";
import { AwsEc2NetworkInterfacePrivateIpAddressDetail } from "./awsec2networkinterfaceprivateipaddressdetail";
import { AwsEc2NetworkInterfaceSecurityGroup } from "./awsec2networkinterfacesecuritygroup";


// AwsEc2NetworkInterfaceDetails
/** 
 * Details about the network interface
**/
export class AwsEc2NetworkInterfaceDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Attachment" })
  attachment?: AwsEc2NetworkInterfaceAttachment;

  @Metadata({ data: "json, name=IpV6Addresses", elemType: shared.AwsEc2NetworkInterfaceIpV6AddressDetail })
  ipV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];

  @Metadata({ data: "json, name=NetworkInterfaceId" })
  networkInterfaceId?: string;

  @Metadata({ data: "json, name=PrivateIpAddresses", elemType: shared.AwsEc2NetworkInterfacePrivateIpAddressDetail })
  privateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];

  @Metadata({ data: "json, name=PublicDnsName" })
  publicDnsName?: string;

  @Metadata({ data: "json, name=PublicIp" })
  publicIp?: string;

  @Metadata({ data: "json, name=SecurityGroups", elemType: shared.AwsEc2NetworkInterfaceSecurityGroup })
  securityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];

  @Metadata({ data: "json, name=SourceDestCheck" })
  sourceDestCheck?: boolean;
}
