import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsRedshiftClusterClusterParameterStatus } from "./awsredshiftclusterclusterparameterstatus";


// AwsRedshiftClusterClusterParameterGroup
/** 
 * A cluster parameter group that is associated with an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterClusterParameterGroup extends SpeakeasyBase {
  @Metadata({ data: "json, name=ClusterParameterStatusList", elemType: shared.AwsRedshiftClusterClusterParameterStatus })
  clusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];

  @Metadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;

  @Metadata({ data: "json, name=ParameterGroupName" })
  parameterGroupName?: string;
}
