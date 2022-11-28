import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails } from "./awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails";
/**
 * The log configuration specification for the container.
**/
export declare class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails extends SpeakeasyBase {
    logDriver?: string;
    options?: Map<string, string>;
    secretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}
