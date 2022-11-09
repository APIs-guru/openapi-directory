import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
/** 
 * A host device to expose to the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=HostPath" })
  hostPath?: string;

  @Metadata({ data: "json, name=Permissions" })
  permissions?: string[];
}
