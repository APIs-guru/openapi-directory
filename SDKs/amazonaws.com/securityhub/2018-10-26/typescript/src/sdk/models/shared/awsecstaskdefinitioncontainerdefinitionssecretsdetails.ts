import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails
/** 
 * A secret to pass to the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsSecretsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=ValueFrom" })
  valueFrom?: string;
}
