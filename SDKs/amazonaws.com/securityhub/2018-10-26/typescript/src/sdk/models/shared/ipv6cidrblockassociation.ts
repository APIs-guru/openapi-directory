import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// Ipv6CidrBlockAssociation
/** 
 * An IPV6 CIDR block association.
**/
export class Ipv6CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=CidrBlockState" })
  cidrBlockState?: string;

  @SpeakeasyMetadata({ data: "json, name=Ipv6CidrBlock" })
  ipv6CidrBlock?: string;
}
