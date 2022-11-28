import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails } from "./awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails";



// AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
/** 
 * The log configuration specification for the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=LogDriver" })
  logDriver?: string;

  @SpeakeasyMetadata({ data: "json, name=Options" })
  options?: Map<string, string>;

  @SpeakeasyMetadata({ data: "json, name=SecretOptions", elemType: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails })
  secretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}
