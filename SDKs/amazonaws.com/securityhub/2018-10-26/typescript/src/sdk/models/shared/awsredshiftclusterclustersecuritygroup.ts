import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterClusterSecurityGroup
/** 
 * A security group that is associated with the cluster.
**/
export class AwsRedshiftClusterClusterSecurityGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterSecurityGroupName" })
  clusterSecurityGroupName?: string;

  @Metadata({ data: "json, name=Status" })
  status?: string;
}
