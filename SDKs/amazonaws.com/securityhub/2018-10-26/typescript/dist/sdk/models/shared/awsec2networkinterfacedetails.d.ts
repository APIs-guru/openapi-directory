import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEc2NetworkInterfaceAttachment } from "./awsec2networkinterfaceattachment";
import { AwsEc2NetworkInterfaceIpV6AddressDetail } from "./awsec2networkinterfaceipv6addressdetail";
import { AwsEc2NetworkInterfacePrivateIpAddressDetail } from "./awsec2networkinterfaceprivateipaddressdetail";
import { AwsEc2NetworkInterfaceSecurityGroup } from "./awsec2networkinterfacesecuritygroup";
/**
 * Details about the network interface
**/
export declare class AwsEc2NetworkInterfaceDetails extends SpeakeasyBase {
    attachment?: AwsEc2NetworkInterfaceAttachment;
    ipV6Addresses?: AwsEc2NetworkInterfaceIpV6AddressDetail[];
    networkInterfaceId?: string;
    privateIpAddresses?: AwsEc2NetworkInterfacePrivateIpAddressDetail[];
    publicDnsName?: string;
    publicIp?: string;
    securityGroups?: AwsEc2NetworkInterfaceSecurityGroup[];
    sourceDestCheck?: boolean;
}
