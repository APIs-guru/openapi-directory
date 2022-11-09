import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails
/** 
 * A port mapping for the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsPortMappingsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerPort" })
  containerPort?: number;

  @Metadata({ data: "json, name=HostPort" })
  hostPort?: number;

  @Metadata({ data: "json, name=Protocol" })
  protocol?: string;
}
