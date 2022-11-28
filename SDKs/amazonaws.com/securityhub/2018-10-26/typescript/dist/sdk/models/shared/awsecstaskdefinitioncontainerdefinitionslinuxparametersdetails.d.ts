import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparameterscapabilitiesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparametersdevicesdetails";
import { AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails } from "./awsecstaskdefinitioncontainerdefinitionslinuxparameterstmpfsdetails";
/**
 * &gt;Linux-specific modifications that are applied to the container, such as Linux kernel capabilities.
**/
export declare class AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDetails extends SpeakeasyBase {
    capabilities?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersCapabilitiesDetails;
    devices?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersDevicesDetails[];
    initProcessEnabled?: boolean;
    maxSwap?: number;
    sharedMemorySize?: number;
    swappiness?: number;
    tmpfs?: AwsEcsTaskDefinitionContainerDefinitionsLinuxParametersTmpfsDetails[];
}
