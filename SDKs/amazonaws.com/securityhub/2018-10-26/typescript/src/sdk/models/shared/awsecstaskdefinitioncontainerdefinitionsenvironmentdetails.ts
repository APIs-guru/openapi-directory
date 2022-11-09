import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails
/** 
 * An environment variable to pass to the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsEnvironmentDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
