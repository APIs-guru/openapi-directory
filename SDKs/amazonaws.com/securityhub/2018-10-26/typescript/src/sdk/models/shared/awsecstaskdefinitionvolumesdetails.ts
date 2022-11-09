import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import { AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails } from "./awsecstaskdefinitionvolumesdockervolumeconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails } from "./awsecstaskdefinitionvolumesefsvolumeconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesHostDetails } from "./awsecstaskdefinitionvolumeshostdetails";


// AwsEcsTaskDefinitionVolumesDetails
/** 
 * A data volume to mount from another container.
**/
export class AwsEcsTaskDefinitionVolumesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=DockerVolumeConfiguration" })
  dockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;

  @Metadata({ data: "json, name=EfsVolumeConfiguration" })
  efsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;

  @Metadata({ data: "json, name=Host" })
  host?: AwsEcsTaskDefinitionVolumesHostDetails;

  @Metadata({ data: "json, name=Name" })
  name?: string;
}
