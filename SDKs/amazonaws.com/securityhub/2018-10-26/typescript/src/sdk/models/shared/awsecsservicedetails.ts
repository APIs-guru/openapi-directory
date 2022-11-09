import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
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
  @Metadata({ data: "json, name=CapacityProviderStrategy", elemType: shared.AwsEcsServiceCapacityProviderStrategyDetails })
  capacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[];

  @Metadata({ data: "json, name=Cluster" })
  cluster?: string;

  @Metadata({ data: "json, name=DeploymentConfiguration" })
  deploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;

  @Metadata({ data: "json, name=DeploymentController" })
  deploymentController?: AwsEcsServiceDeploymentControllerDetails;

  @Metadata({ data: "json, name=DesiredCount" })
  desiredCount?: number;

  @Metadata({ data: "json, name=EnableEcsManagedTags" })
  enableEcsManagedTags?: boolean;

  @Metadata({ data: "json, name=EnableExecuteCommand" })
  enableExecuteCommand?: boolean;

  @Metadata({ data: "json, name=HealthCheckGracePeriodSeconds" })
  healthCheckGracePeriodSeconds?: number;

  @Metadata({ data: "json, name=LaunchType" })
  launchType?: string;

  @Metadata({ data: "json, name=LoadBalancers", elemType: shared.AwsEcsServiceLoadBalancersDetails })
  loadBalancers?: AwsEcsServiceLoadBalancersDetails[];

  @Metadata({ data: "json, name=Name" })
  name?: string;

  @Metadata({ data: "json, name=NetworkConfiguration" })
  networkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;

  @Metadata({ data: "json, name=PlacementConstraints", elemType: shared.AwsEcsServicePlacementConstraintsDetails })
  placementConstraints?: AwsEcsServicePlacementConstraintsDetails[];

  @Metadata({ data: "json, name=PlacementStrategies", elemType: shared.AwsEcsServicePlacementStrategiesDetails })
  placementStrategies?: AwsEcsServicePlacementStrategiesDetails[];

  @Metadata({ data: "json, name=PlatformVersion" })
  platformVersion?: string;

  @Metadata({ data: "json, name=PropagateTags" })
  propagateTags?: string;

  @Metadata({ data: "json, name=Role" })
  role?: string;

  @Metadata({ data: "json, name=SchedulingStrategy" })
  schedulingStrategy?: string;

  @Metadata({ data: "json, name=ServiceArn" })
  serviceArn?: string;

  @Metadata({ data: "json, name=ServiceName" })
  serviceName?: string;

  @Metadata({ data: "json, name=ServiceRegistries", elemType: shared.AwsEcsServiceServiceRegistriesDetails })
  serviceRegistries?: AwsEcsServiceServiceRegistriesDetails[];

  @Metadata({ data: "json, name=TaskDefinition" })
  taskDefinition?: string;
}
