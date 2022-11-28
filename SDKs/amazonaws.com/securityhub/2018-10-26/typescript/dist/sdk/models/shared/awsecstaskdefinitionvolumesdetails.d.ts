import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails } from "./awsecstaskdefinitionvolumesdockervolumeconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails } from "./awsecstaskdefinitionvolumesefsvolumeconfigurationdetails";
import { AwsEcsTaskDefinitionVolumesHostDetails } from "./awsecstaskdefinitionvolumeshostdetails";
/**
 * A data volume to mount from another container.
**/
export declare class AwsEcsTaskDefinitionVolumesDetails extends SpeakeasyBase {
    dockerVolumeConfiguration?: AwsEcsTaskDefinitionVolumesDockerVolumeConfigurationDetails;
    efsVolumeConfiguration?: AwsEcsTaskDefinitionVolumesEfsVolumeConfigurationDetails;
    host?: AwsEcsTaskDefinitionVolumesHostDetails;
    name?: string;
}
