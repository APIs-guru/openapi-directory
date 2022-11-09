import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRdsDbClusterOptionGroupMembership
/** 
 * Information about an option group membership for a DB cluster.
**/
export class AwsRdsDbClusterOptionGroupMembership extends SpeakeasyBase {
  @Metadata({ data: "json, name=DbClusterOptionGroupName" })
  dbClusterOptionGroupName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
