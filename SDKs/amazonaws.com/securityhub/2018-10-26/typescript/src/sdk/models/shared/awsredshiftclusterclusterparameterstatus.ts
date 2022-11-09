import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsRedshiftClusterClusterParameterStatus
/** 
 * The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterClusterParameterStatus extends SpeakeasyBase {
  @Metadata({ data: "json, name=ParameterApplyErrorDescription" })
  parameterApplyErrorDescription?: string;

  @Metadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;

  @Metadata({ data: "json, name=ParameterName" })
  parameterName?: string;
}
