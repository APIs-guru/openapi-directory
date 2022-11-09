import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsEcsClusterClusterSettingsDetails } from "./awsecsclusterclustersettingsdetails";
import { AwsEcsClusterConfigurationDetails } from "./awsecsclusterconfigurationdetails";
import { AwsEcsClusterDefaultCapacityProviderStrategyDetails } from "./awsecsclusterdefaultcapacityproviderstrategydetails";


// AwsEcsClusterDetails
/** 
 * provides details about an ECS cluster.
**/
export class AwsEcsClusterDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=CapacityProviders" })
  capacityProviders?: string[];

  @Metadata({ data: "json, name=ClusterSettings", elemType: shared.AwsEcsClusterClusterSettingsDetails })
  clusterSettings?: AwsEcsClusterClusterSettingsDetails[];

  @Metadata({ data: "json, name=Configuration" })
  configuration?: AwsEcsClusterConfigurationDetails;

  @Metadata({ data: "json, name=DefaultCapacityProviderStrategy", elemType: shared.AwsEcsClusterDefaultCapacityProviderStrategyDetails })
  defaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
}
