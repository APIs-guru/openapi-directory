import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsRedshiftClusterClusterParameterStatus
/** 
 * The status of a parameter in a cluster parameter group for an Amazon Redshift cluster.
**/
export class AwsRedshiftClusterClusterParameterStatus extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ParameterApplyErrorDescription" })
  parameterApplyErrorDescription?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterApplyStatus" })
  parameterApplyStatus?: string;

  @SpeakeasyMetadata({ data: "json, name=ParameterName" })
  parameterName?: string;
}
