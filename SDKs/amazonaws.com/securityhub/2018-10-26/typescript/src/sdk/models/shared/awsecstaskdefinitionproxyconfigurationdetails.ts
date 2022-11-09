import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails } from "./awsecstaskdefinitionproxyconfigurationproxyconfigurationpropertiesdetails";


// AwsEcsTaskDefinitionProxyConfigurationDetails
/** 
 * The configuration details for the App Mesh proxy.
**/
export class AwsEcsTaskDefinitionProxyConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=ContainerName" })
  containerName?: string;

  @Metadata({ data: "json, name=ProxyConfigurationProperties", elemType: shared.AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails })
  proxyConfigurationProperties?: AwsEcsTaskDefinitionProxyConfigurationProxyConfigurationPropertiesDetails[];

  @Metadata({ data: "json, name=Type" })
  type?: string;
}
