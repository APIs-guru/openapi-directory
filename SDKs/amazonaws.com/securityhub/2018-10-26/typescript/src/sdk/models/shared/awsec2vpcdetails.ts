import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { CidrBlockAssociation } from "./cidrblockassociation";
import { Ipv6CidrBlockAssociation } from "./ipv6cidrblockassociation";


// AwsEc2VpcDetails
/** 
 * Details about an EC2 VPC.
**/
export class AwsEc2VpcDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CidrBlockAssociationSet", elemType: shared.CidrBlockAssociation })
  cidrBlockAssociationSet?: CidrBlockAssociation[];

  @Metadata({ data: "json, name=DhcpOptionsId" })
  dhcpOptionsId?: string;

  @Metadata({ data: "json, name=Ipv6CidrBlockAssociationSet", elemType: shared.Ipv6CidrBlockAssociation })
  ipv6CidrBlockAssociationSet?: Ipv6CidrBlockAssociation[];

  @Metadata({ data: "json, name=State" })
  state?: string;
}
