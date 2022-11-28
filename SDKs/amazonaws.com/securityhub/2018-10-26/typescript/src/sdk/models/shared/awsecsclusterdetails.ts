import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsClusterClusterSettingsDetails } from "./awsecsclusterclustersettingsdetails";
import { AwsEcsClusterConfigurationDetails } from "./awsecsclusterconfigurationdetails";
import { AwsEcsClusterDefaultCapacityProviderStrategyDetails } from "./awsecsclusterdefaultcapacityproviderstrategydetails";



// AwsEcsClusterDetails
/** 
 * provides details about an ECS cluster.
**/
export class AwsEcsClusterDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityProviders" })
  capacityProviders?: string[];

  @SpeakeasyMetadata({ data: "json, name=ClusterSettings", elemType: AwsEcsClusterClusterSettingsDetails })
  clusterSettings?: AwsEcsClusterClusterSettingsDetails[];

  @SpeakeasyMetadata({ data: "json, name=Configuration" })
  configuration?: AwsEcsClusterConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=DefaultCapacityProviderStrategy", elemType: AwsEcsClusterDefaultCapacityProviderStrategyDetails })
  defaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
}
