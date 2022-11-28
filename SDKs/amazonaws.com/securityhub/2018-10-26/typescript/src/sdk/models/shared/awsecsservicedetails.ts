import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsServiceCapacityProviderStrategyDetails } from "./awsecsservicecapacityproviderstrategydetails";
import { AwsEcsServiceDeploymentConfigurationDetails } from "./awsecsservicedeploymentconfigurationdetails";
import { AwsEcsServiceDeploymentControllerDetails } from "./awsecsservicedeploymentcontrollerdetails";
import { AwsEcsServiceLoadBalancersDetails } from "./awsecsserviceloadbalancersdetails";
import { AwsEcsServiceNetworkConfigurationDetails } from "./awsecsservicenetworkconfigurationdetails";
import { AwsEcsServicePlacementConstraintsDetails } from "./awsecsserviceplacementconstraintsdetails";
import { AwsEcsServicePlacementStrategiesDetails } from "./awsecsserviceplacementstrategiesdetails";
import { AwsEcsServiceServiceRegistriesDetails } from "./awsecsserviceserviceregistriesdetails";



// AwsEcsServiceDetails
/** 
 * Provides details about a service within an ECS cluster.
**/
export class AwsEcsServiceDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=CapacityProviderStrategy", elemType: AwsEcsServiceCapacityProviderStrategyDetails })
  capacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[];

  @SpeakeasyMetadata({ data: "json, name=Cluster" })
  cluster?: string;

  @SpeakeasyMetadata({ data: "json, name=DeploymentConfiguration" })
  deploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=DeploymentController" })
  deploymentController?: AwsEcsServiceDeploymentControllerDetails;

  @SpeakeasyMetadata({ data: "json, name=DesiredCount" })
  desiredCount?: number;

  @SpeakeasyMetadata({ data: "json, name=EnableEcsManagedTags" })
  enableEcsManagedTags?: boolean;

  @SpeakeasyMetadata({ data: "json, name=EnableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @SpeakeasyMetadata({ data: "json, name=HealthCheckGracePeriodSeconds" })
  healthCheckGracePeriodSeconds?: number;

  @SpeakeasyMetadata({ data: "json, name=LaunchType" })
  launchType?: string;

  @SpeakeasyMetadata({ data: "json, name=LoadBalancers", elemType: AwsEcsServiceLoadBalancersDetails })
  loadBalancers?: AwsEcsServiceLoadBalancersDetails[];

  @SpeakeasyMetadata({ data: "json, name=Name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;

  @SpeakeasyMetadata({ data: "json, name=PlacementConstraints", elemType: AwsEcsServicePlacementConstraintsDetails })
  placementConstraints?: AwsEcsServicePlacementConstraintsDetails[];

  @SpeakeasyMetadata({ data: "json, name=PlacementStrategies", elemType: AwsEcsServicePlacementStrategiesDetails })
  placementStrategies?: AwsEcsServicePlacementStrategiesDetails[];

  @SpeakeasyMetadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @SpeakeasyMetadata({ data: "json, name=PropagateTags" })
  propagateTags?: string;

  @SpeakeasyMetadata({ data: "json, name=Role" })
  role?: string;

  @SpeakeasyMetadata({ data: "json, name=SchedulingStrategy" })
  schedulingStrategy?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceArn" })
  serviceArn?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @SpeakeasyMetadata({ data: "json, name=ServiceRegistries", elemType: AwsEcsServiceServiceRegistriesDetails })
  serviceRegistries?: AwsEcsServiceServiceRegistriesDetails[];

  @SpeakeasyMetadata({ data: "json, name=TaskDefinition" })
  taskDefinition?: string;
}
