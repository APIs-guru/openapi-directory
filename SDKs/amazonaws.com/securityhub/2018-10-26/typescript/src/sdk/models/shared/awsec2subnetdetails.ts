import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";


// AwsEc2SubnetDetails
/** 
 * Contains information about a subnet in Amazon EC2.
**/
export class AwsEc2SubnetDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssignIpv6AddressOnCreation" })
  assignIpv6AddressOnCreation?: boolean;

  @Metadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @Metadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @Metadata({ data: "json, name=AvailableIpAddressCount" })
  availableIpAddressCount?: number;

  @Metadata({ data: "json, name=CidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "json, name=DefaultForAz" })
  defaultForAz?: boolean;

  @Metadata({ data: "json, name=Ipv6CidrBlockAssociationSet", elemType: shared.Ipv6CidrBlockAssociation })
  ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];

  @Metadata({ data: "json, name=MapPublicIpOnLaunch" })
  mapPublicIpOnLaunch?: boolean;

  @Metadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @Metadata({ data: "json, name=State" })
  state?: string;

  @Metadata({ data: "json, name=SubnetArn" })
  subnetArn?: string;

  @Metadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @Metadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
