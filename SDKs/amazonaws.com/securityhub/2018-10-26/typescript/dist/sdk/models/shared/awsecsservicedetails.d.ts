import { SpeakeasyBase } from "../../../internal/utils";
import { AwsEcsServiceCapacityProviderStrategyDetails } from "./awsecsservicecapacityproviderstrategydetails";
import { AwsEcsServiceDeploymentConfigurationDetails } from "./awsecsservicedeploymentconfigurationdetails";
import { AwsEcsServiceDeploymentControllerDetails } from "./awsecsservicedeploymentcontrollerdetails";
import { AwsEcsServiceLoadBalancersDetails } from "./awsecsserviceloadbalancersdetails";
import { AwsEcsServiceNetworkConfigurationDetails } from "./awsecsservicenetworkconfigurationdetails";
import { AwsEcsServicePlacementConstraintsDetails } from "./awsecsserviceplacementconstraintsdetails";
import { AwsEcsServicePlacementStrategiesDetails } from "./awsecsserviceplacementstrategiesdetails";
import { AwsEcsServiceServiceRegistriesDetails } from "./awsecsserviceserviceregistriesdetails";
/**
 * Provides details about a service within an ECS cluster.
**/
export declare class AwsEcsServiceDetails extends SpeakeasyBase {
    capacityProviderStrategy?: AwsEcsServiceCapacityProviderStrategyDetails[];
    cluster?: string;
    deploymentConfiguration?: AwsEcsServiceDeploymentConfigurationDetails;
    deploymentController?: AwsEcsServiceDeploymentControllerDetails;
    desiredCount?: number;
    enableEcsManagedTags?: boolean;
    enableExecuteCommand?: boolean;
    healthCheckGracePeriodSeconds?: number;
    launchType?: string;
    loadBalancers?: AwsEcsServiceLoadBalancersDetails[];
    name?: string;
    networkConfiguration?: AwsEcsServiceNetworkConfigurationDetails;
    placementConstraints?: AwsEcsServicePlacementConstraintsDetails[];
    placementStrategies?: AwsEcsServicePlacementStrategiesDetails[];
    platformVersion?: string;
    propagateTags?: string;
    role?: string;
    schedulingStrategy?: string;
    serviceArn?: string;
    serviceName?: string;
    serviceRegistries?: AwsEcsServiceServiceRegistriesDetails[];
    taskDefinition?: string;
}
