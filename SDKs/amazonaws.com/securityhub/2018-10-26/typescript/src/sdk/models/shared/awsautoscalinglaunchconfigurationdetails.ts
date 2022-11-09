import { Metadata, SpeakeasyBase } from "../../../internal/utils/utils";
import * as shared from "../shared";
import { AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails } from "./awsautoscalinglaunchconfigurationblockdevicemappingsdetails";
import { AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails } from "./awsautoscalinglaunchconfigurationinstancemonitoringdetails";


// AwsAutoScalingLaunchConfigurationDetails
/** 
 * Details about a launch configuration.
**/
export class AwsAutoScalingLaunchConfigurationDetails extends SpeakeasyBase {
  @Metadata({ data: "json, name=AssociatePublicIpAddress" })
  associatePublicIpAddress?: boolean;

  @Metadata({ data: "json, name=BlockDeviceMappings", elemType: shared.AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails })
  blockDeviceMappings?: AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[];

  @Metadata({ data: "json, name=ClassicLinkVpcId" })
  classicLinkVpcId?: string;

  @Metadata({ data: "json, name=ClassicLinkVpcSecurityGroups" })
  classicLinkVpcSecurityGroups?: string[];

  @Metadata({ data: "json, name=CreatedTime" })
  createdTime?: string;

  @Metadata({ data: "json, name=EbsOptimized" })
  ebsOptimized?: boolean;

  @Metadata({ data: "json, name=IamInstanceProfile" })
  iamInstanceProfile?: string;

  @Metadata({ data: "json, name=ImageId" })
  imageId?: string;

  @Metadata({ data: "json, name=InstanceMonitoring" })
  instanceMonitoring?: AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails;

  @Metadata({ data: "json, name=InstanceType" })
  instanceType?: string;

  @Metadata({ data: "json, name=KernelId" })
  kernelId?: string;

  @Metadata({ data: "json, name=KeyName" })
  keyName?: string;

  @Metadata({ data: "json, name=LaunchConfigurationName" })
  launchConfigurationName?: string;

  @Metadata({ data: "json, name=PlacementTenancy" })
  placementTenancy?: string;

  @Metadata({ data: "json, name=RamdiskId" })
  ramdiskId?: string;

  @Metadata({ data: "json, name=SecurityGroups" })
  securityGroups?: string[];

  @Metadata({ data: "json, name=SpotPrice" })
  spotPrice?: string;

  @Metadata({ data: "json, name=UserData" })
  userData?: string;
}
