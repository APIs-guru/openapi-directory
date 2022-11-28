import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails
/** 
 * Information about a Docker volume.
**/
export class AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Autoprovision" })
  autoprovision?: boolean;

  @SpeakeasyMetadata({ data: "json, name=Driver" })
  driver?: string;

  @SpeakeasyMetadata({ data: "json, name=DriverOpts" })
  driverOpts?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Labels" })
  labels?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=Scope" })
  scope?: string;
}
