import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
/** 
 * A dependency that is defined for container startup and shutdown.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Condition" })
  condition?: string;

  @Metadata({ data: "json, name=ContainerName" })
  containerName?: string;
}
