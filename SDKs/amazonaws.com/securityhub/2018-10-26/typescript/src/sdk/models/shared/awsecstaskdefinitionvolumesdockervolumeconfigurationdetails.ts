import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
/** 
 * Information about a Docker volume.
**/
export class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Autoprovision" })
  autoprovision?: boolean;

  @Metadata({ data: "json, name=Driver" })
  driver?: string;

  @Metadata({ data: "json, name=DriverOpts" })
  driverOpts?: Map<string, string>;

  @Metadata({ data: "json, name=Labels" })
  labels?: Map<string, string>;

  @Metadata({ data: "json, name=Scope" })
  scope?: string;
}
