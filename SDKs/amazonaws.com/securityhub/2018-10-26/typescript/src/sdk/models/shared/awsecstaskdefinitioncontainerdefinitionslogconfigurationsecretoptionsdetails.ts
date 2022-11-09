import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
/** 
 * A secret to pass to the log configuration.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ValueFrom" })
  valueFrom?: string;
}
