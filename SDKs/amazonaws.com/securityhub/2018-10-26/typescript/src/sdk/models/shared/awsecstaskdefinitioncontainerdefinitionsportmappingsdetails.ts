import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
/** 
 * A port mapping for the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerPort" })
  containerPort?: number;

  @SpeakeasyMetadata({ data: "json, name=HostPort" })
  hostPort?: number;

  @SpeakeasyMetadata({ data: "json, name=Protocol" })
  protocol?: string;
}
