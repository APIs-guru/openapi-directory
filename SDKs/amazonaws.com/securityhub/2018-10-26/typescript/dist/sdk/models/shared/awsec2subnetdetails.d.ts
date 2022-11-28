import { SpeakeasyBase } from "../../../internal/utils";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";
/**
 * Contains information about a subnet in Amazon EC2.
**/
export declare class AwsEc2SubnetDetails extends SpeakeasyBase {
    assignIpv6AddressOnCreation?: boolean;
    availabilityZone?: string;
    availabilityZoneId?: string;
    availableIpAddressCount?: number;
    cidrBlock?: string;
    defaultForAz?: boolean;
    ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];
    mapPublicIpOnLaunch?: boolean;
    ownerId?: string;
    state?: string;
    subnetArn?: string;
    subnetId?: string;
    vpcId?: string;
}
