import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// Ipv6CidrBlockAssociation
/** 
 * An IPV6 CIDR block association.
**/
export class Ipv6CidrBlockAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=CidrBlockState" })
  cidrBlockState?: string;

  @Metadata({ data: "json, name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;
}
