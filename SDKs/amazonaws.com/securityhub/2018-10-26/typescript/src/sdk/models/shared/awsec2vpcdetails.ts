import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CidrBlockAssociation } from "./cidrblockassociation";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";



// AwsEc2VpcDetails
/** 
 * Details about an EC2 VPC.
**/
export class AwsEc2VpcDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CidrBlockAssociationSet", elemType: CidrBlockAssociation })
  cidrBlockAssociationSet?: CidrBlockAssociation[];

  @SpeakeasyMetadata({ data: "json, name=DhcpOptionsId" })
  dhcpOptionsId?: string;

  @SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlockAssociationSet", elemType: Ipv6CidrBlockAssociation })
  ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];

  @SpeakeasyMetadata({ data: "json, name=State" })
  state?: string;
}
