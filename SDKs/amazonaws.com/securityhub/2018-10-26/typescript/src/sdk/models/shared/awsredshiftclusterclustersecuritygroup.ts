import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterClusterSecurityGroup
/** 
 * A security group that is associated with the cluster.
**/
export class AwsRedshiftClusterClusterSecurityGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterSecurityGroupName" })
  clusterSecurityGroupName?: string;

  @SpeakeasyMetadata({ data: "json, name=Status" })
  status?: string;
}
