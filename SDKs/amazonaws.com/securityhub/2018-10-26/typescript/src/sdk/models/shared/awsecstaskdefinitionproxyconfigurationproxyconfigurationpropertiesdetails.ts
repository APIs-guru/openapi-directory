import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails
/** 
 * A network configuration parameter to provide to the Container Network Interface (CNI) plugin.
**/
export class AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=Value" })
  value?: string;
}
