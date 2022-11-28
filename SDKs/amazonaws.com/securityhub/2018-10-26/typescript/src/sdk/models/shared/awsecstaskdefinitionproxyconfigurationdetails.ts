import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails } from "./awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails";



// AwsEcsTaskDefinitionProxyConfigurationDetails
/** 
 * The configuration details for the App Mesh proxy.
**/
export class AwsEcsTaskDefinitionProxyConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=ContainerName" })
  containerName?: string;

  @SpeakeasyMetadata({ data: "json, name=ProxyConfigurationProperties", elemType: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails })
  proxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];

  @SpeakeasyMetadata({ data: "json, name=Type" })
  type?: string;
}
