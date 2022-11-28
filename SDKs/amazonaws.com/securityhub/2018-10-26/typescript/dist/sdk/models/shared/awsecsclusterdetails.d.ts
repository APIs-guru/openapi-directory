import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsClusterClusterSettingsDetails } from "./awsecsclusterclustersettingsdetails";
import { AwsEcsClusterConfigurationDetails } from "./awsecsclusterconfigurationdetails";
import { AwsEcsClusterDefaultCapacityProviderStrategyDetails } from "./awsecsclusterdefaultcapacityproviderstrategydetails";
/**
 * provides details about an ECS cluster.
**/
export declare class AwsEcsClusterDetails extends SpeakeasyBase {
    capacityProviders?: string[];
    clusterSettings?: AwsEcsClusterClusterSettingsDetails[];
    configuration?: AwsEcsClusterConfigurationDetails;
    defaultCapacityProviderStrategy?: AwsEcsClusterDefaultCapacityProviderStrategyDetails[];
}
