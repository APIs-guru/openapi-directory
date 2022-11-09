import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails
/** 
 * A file that contain environment variables to pass to a container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Type" })
  type?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
