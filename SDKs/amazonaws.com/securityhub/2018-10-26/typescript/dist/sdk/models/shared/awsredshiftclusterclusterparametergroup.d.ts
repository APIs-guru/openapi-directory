import { SpeakeasyBase } from "../../../internal/utils";
import { AwsRedshiftClusterClusterParameterStatus } from "./awsredshiftclusterclusterparameterstatus";
/**
 * A cluster parameter group that is associated with an Amazon Redshift cluster.
**/
export declare class AwsRedshiftClusterClusterParameterGroup extends SpeakeasyBase {
    clusterParameterStatusList?: AwsRedshiftClusterClusterParameterStatus[];
    parameterApplyStatus?: string;
    parameterGroupName?: string;
}
