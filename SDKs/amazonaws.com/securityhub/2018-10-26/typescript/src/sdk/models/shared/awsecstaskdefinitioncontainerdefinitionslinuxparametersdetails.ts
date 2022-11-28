import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails";



// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails
/** 
 * &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Capabilities" })
  capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;

  @SpeakeasyMetadata({ data: "json, name=Devices", elemType: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails })
  devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];

  @SpeakeasyMetadata({ data: "json, name=InitProcessEnabled" })
  initProcessEnabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=MaxSwap" })
  maxSwap?: number;

  @SpeakeasyMetadata({ data: "json, name=SharedMemorySize" })
  sharedMemorySize?: number;

  @SpeakeasyMetadata({ data: "json, name=Swappiness" })
  swappiness?: number;

  @SpeakeasyMetadata({ data: "json, name=Tmpfs", elemType: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails })
  tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}
