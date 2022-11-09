import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";


// AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
/** 
 * A network configuration parameter to provide to the Container Network Interface (CNI) plugin.
**/
export class AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=Value" })
  value?: string;
}
