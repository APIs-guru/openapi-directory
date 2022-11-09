import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails } from "./awsecstaskdefinitioncontainerdefinitionslogconfigurationsecretoptionsdetails";


// AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails
/** 
 * The log configuration specification for the container.
**/
export class AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=LogDriver" })
  logDriver?: string;

  @Metadata({ data: "json, name=Options" })
  options?: Map<string, string>;

  @Metadata({ data: "json, name=SecretOptions", elemType: shared.AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails })
  secretOptions?: AwsEcsTaskDefinitionContainerDefinitionsLogConfigurationSecretOptionsDetails[];
}
