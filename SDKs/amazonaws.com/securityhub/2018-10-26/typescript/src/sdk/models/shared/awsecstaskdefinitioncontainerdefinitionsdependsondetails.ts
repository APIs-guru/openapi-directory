import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails
/** 
 * A dependency that is defined for container startup and shutdown.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsDependsOnDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Condition" })
  condition?: string;

  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName?: string;
}
