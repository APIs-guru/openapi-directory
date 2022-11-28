import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
/** 
 * The container path, mount options, and size (in MiB) of a tmpfs mount.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerPath" })
  containerPath?: string;

  @SpeakeasyMetadata({ data: "json, name=MountOptions" })
  mountOptions?: string[];

  @SpeakeasyMetadata({ data: "json, name=Size" })
  size?: number;
}
