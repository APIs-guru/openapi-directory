import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRdsDbClusterOptionGroupMembership
/** 
 * Information about an option group membership for a DB cluster.
**/
export class AwsRdsDbClusterOptionGroupMembership extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DbClusterOptionGroupName" })
  dbClusterOptionGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
