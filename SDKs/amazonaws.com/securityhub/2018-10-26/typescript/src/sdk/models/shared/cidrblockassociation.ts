import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// CidrBlockAssociation
/** 
 * An IPv4 CIDR block association.
**/
export class CidrBlockAssociation extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @Metadata({ data: "json, name=CidrBlock" })
  cidrBlock?: string;

  @Metadata({ data: "json, name=CidrBlockState" })
  cidrBlockState?: string;
}
