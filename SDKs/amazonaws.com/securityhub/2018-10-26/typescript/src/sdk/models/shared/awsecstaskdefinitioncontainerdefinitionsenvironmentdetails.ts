import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails
/** 
 * An environment variable to pass to the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
