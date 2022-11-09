import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails
/** 
 * The container path, mount options, and size (in MiB) of a tmpfs mount.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerPath" })
  containerPath?: string;

  @Metadata({ data: "json, name=MountOptions" })
  mountOptions?: string[];

  @Metadata({ data: "json, name=Size" })
  size?: number;
}
