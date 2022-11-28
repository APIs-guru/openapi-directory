import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";



// AwsEc2SubnetDetails
/** 
 * Contains information about a subnet in Amazon EC2.
**/
export class AwsEc2SubnetDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssignIpv6AddressOnCreation" })
  assignIpv6AddressOnCreation?: boolean;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZone" })
  availabilityZone?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailabilityZoneId" })
  availabilityZoneId?: string;

  @SpeakeasyMetadata({ data: "json, name=AvailableIpAddressCount" })
  availableIpAddressCount?: number;

  @SpeakeasyMetadata({ data: "json, name=CidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=DefaultForAz" })
  defaultForAz?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlockAssociationSet", elemType: Ipv6CidrBlockAssociation })
  ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];

  @SpeakeasyMetadata({ data: "json, name=MapPublicIpOnLaunch" })
  mapPublicIpOnLaunch?: boolean;

  @SpeakeasyMetadata({ data: "json, name=OwnerId" })
  ownerId?: string;

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetArn" })
  subnetArn?: string;

  @SpeakeasyMetadata({ data: "json, name=SubnetId" })
  subnetId?: string;

  @SpeakeasyMetadata({ data: "json, name=VpcId" })
  vpcId?: string;
}
