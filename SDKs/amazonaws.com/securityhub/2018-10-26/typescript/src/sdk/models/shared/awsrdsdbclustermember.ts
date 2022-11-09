import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbClusterMember
/** 
 * Information about an instance in the DB cluster.
**/
export class AwsRdsDbClusterMember extends SpeakeasyBase {
  @Metadata({ data: "json, name=DbClusterParameterGroupStatus" })
  dbClusterParameterGroupStatus?: string;

  @Metadata({ data: "json, name=DbInstanceIdentifier" })
  dbInstanceIdentifier?: string;

  @Metadata({ data: "json, name=IsClusterWriter" })
  isClusterWriter?: boolean;

  @Metadata({ data: "json, name=PromotionTier" })
  promotionTier?: number;
}
