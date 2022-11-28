import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails
/** 
 * A host device to expose to the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerPath" })
  containerPath?: string;

  @SpeakeasyMetadata({ data: "json, name=HostPath" })
  hostPath?: string;

  @SpeakeasyMetadata({ data: "json, name=Permissions" })
  permissions?: string[];
}
