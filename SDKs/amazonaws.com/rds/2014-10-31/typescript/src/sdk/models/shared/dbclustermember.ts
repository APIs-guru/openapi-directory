import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// DbClusterMember
/** 
 * Contains information about an instance that is part of a DB cluster.
**/
export class DbClusterMember extends SpeakeasyBase {
  @SpeakeasyMetadata()
  dbClusterParameterGroupStatus?: string;

  @SpeakeasyMetadata()
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata()
  isClusterWriter?: boolean;

  @SpeakeasyMetadata()
  promotionTier?: number;
}
