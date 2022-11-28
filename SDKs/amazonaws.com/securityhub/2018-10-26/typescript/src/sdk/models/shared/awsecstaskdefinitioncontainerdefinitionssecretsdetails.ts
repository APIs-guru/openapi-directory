import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
/** 
 * A secret to pass to the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=ValueFrom" })
  valueFrom?: string;
}
