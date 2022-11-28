import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsRedshiftClusterClusterParameterStatus } from "./awsredshiftclusterclusterparameterstatus";



// AwsRedshiftClusterClusterParameterGroup
/** 
 * A cluster parameter group that is associated with an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterClusterParameterGroup extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ClusterParameterStatusList", elemType: AwsRedshiftClusterClusterParameterStatus })
  clusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  @SpeakeasyMetadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;
}
