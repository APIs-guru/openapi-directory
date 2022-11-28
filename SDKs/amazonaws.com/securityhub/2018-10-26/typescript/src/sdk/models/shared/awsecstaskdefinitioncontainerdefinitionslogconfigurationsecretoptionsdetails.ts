import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails
/** 
 * A secret to pass to the log configuration.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ValueFrom" })
  valueFrom?: string;
}
