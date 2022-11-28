import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CidrBlockAssociation
/** 
 * An IPv4 CIDR block association.
**/
export class CidrBlockAssociation extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociationId" })
  associationId?: string;

  @SpeakeasyMetadata({ data: "json, name=CidrBlock" })
  cidrBlock?: string;

  @SpeakeasyMetadata({ data: "json, name=CidrBlockState" })
  cidrBlockState?: string;
}
