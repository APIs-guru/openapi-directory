import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbClusterMember
/** 
 * Information about an instance in the DB cluster.
**/
export class AwsRdsDbClusterMember extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DbClusterParameterGroupStatus" })
  dbClusterParameterGroupStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @SpeakeasyMetadata({ data: "json, name=IsClusterWriter" })
  isClusterWriter?: boolean;

  @SpeakeasyMetadata({ data: "json, name=PromotionTier" })
  promotionTier?: number;
}
