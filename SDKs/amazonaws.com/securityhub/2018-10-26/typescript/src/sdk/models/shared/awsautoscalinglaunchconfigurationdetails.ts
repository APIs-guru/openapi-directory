import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsdetails";
import { AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails } from "./awsautoscalinglaunchconfigurationinstancemonitoringdetails";



// AwsAutoScalingLaunchConfigurationDetails
/** 
 * Details about a launch configuration.
**/
export class AwsAutoScalingLaunchConfigurationDetails extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=AssociatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @SpeakeasyMetadata({ data: "json, name=BlockDeviceMappings", elemType: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails })
  blockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];

  @SpeakeasyMetadata({ data: "json, name=ClassicLinkVpcId" })
  classicLinkVpcId?: string;

  @SpeakeasyMetadata({ data: "json, name=ClassicLinkVpcSecurityGroups" })
  classicLinkVpcSecurityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @SpeakeasyMetadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @SpeakeasyMetadata({ data: "json, name=IamInstanceProfile" })
  iamInstanceProfile?: string;

  @SpeakeasyMetadata({ data: "json, name=ImageId" })
  imageId?: string;

  @SpeakeasyMetadata({ data: "json, name=InstanceMonitoring" })
  instanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;

  @SpeakeasyMetadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @SpeakeasyMetadata({ data: "json, name=KernelId" })
  kernelId?: string;

  @SpeakeasyMetadata({ data: "json, name=KeyName" })
  keyName?: string;

  @SpeakeasyMetadata({ data: "json, name=LaunchConfigurationName" })
  launchConfigurationName?: string;

  @SpeakeasyMetadata({ data: "json, name=PlacementTenancy" })
  placementTenancy?: string;

  @SpeakeasyMetadata({ data: "json, name=RamdiskId" })
  ramdiskId?: string;

  @SpeakeasyMetadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @SpeakeasyMetadata({ data: "json, name=SpotPrice" })
  spotPrice?: string;

  @SpeakeasyMetadata({ data: "json, name=UserData" })
  userData?: string;
}
