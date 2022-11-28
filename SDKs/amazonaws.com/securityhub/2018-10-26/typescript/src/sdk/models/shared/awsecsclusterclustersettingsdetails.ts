import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsClusterClusterSettingsDetails
/** 
 * Indicates whether to enable CloudWatch Container Insights for the ECS cluster.
**/
export class AwsEcsClusterClusterSettingsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
