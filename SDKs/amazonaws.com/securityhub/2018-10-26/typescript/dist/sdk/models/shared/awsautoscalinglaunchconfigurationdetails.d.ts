import { SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsdetails";
import { AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails } from "./awsautoscalinglaunchconfigurationinstancemonitoringdetails";
/**
 * Details about a launch configuration.
**/
export declare class AwsAutoScalingLaunchConfigurationDetails extends SpeakeasyBase {
    associatePublicIpAddress?: boolean;
    blockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];
    classicLinkVpcId?: string;
    classicLinkVpcSecurityGroups?: string[];
    createdTime?: string;
    ebsOptimized?: boolean;
    iamInstanceProfile?: string;
    imageId?: string;
    instanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;
    instanceType?: string;
    kernelId?: string;
    keyName?: string;
    launchConfigurationName?: string;
    placementTenancy?: string;
    ramdiskId?: string;
    securityGroups?: string[];
    spotPrice?: string;
    userData?: string;
}
