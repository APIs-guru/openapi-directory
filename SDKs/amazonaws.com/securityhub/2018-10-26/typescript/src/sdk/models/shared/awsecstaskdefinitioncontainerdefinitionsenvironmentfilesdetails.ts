import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails
/** 
 * A file that contain environment variables to pass to a container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsEnvironmentFilesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
