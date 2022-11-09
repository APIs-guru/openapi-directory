import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails";


// AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails
/** 
 * &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Capabilities" })
  capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;

  @Metadata({ data: "json, name=Devices", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails })
  devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];

  @Metadata({ data: "json, name=InitProcessEnabled" })
  initProcessEnabled?: boolean;

  @Metadata({ data: "json, name=MaxSwap" })
  maxSwap?: number;

  @Metadata({ data: "json, name=SharedMemorySize" })
  sharedMemorySize?: number;

  @Metadata({ data: "json, name=Swappiness" })
  swappiness?: number;

  @Metadata({ data: "json, name=Tmpfs", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails })
  tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}
