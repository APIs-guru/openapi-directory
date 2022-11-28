import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails } from "./awsecstaskdefinitionvolumesdockervolumeconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails } from "./awsecstaskdefinitionvolumesefsvolumeconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesHostDetails } from "./awsecstaskdefinitionvolumeshostdetails";



// AwsEcsTaskDefinitionVolumesDetails
/** 
 * A data volume to mount from another container.
**/
export class AwsEcsTaskDefinitionVolumesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=DockerVolumeConfiguration" })
  dockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=EfsVolumeConfiguration" })
  efsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=Host" })
  host?: AwsEcsTaskDefinitionVolumesHostDetails;

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;
}
