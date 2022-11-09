import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsClusterClusterSettingsDetails
/** 
 * Indicates whether to enable CloudWatch Container Insights for the ECS cluster.
**/
export class AwsEcsClusterClusterSettingsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
