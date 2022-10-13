from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import awsautoscalinglaunchconfigurationblockdevicemappingsdetails
from . import awsautoscalinglaunchconfigurationinstancemonitoringdetails


@dataclass_json
@dataclass
class AwsAutoScalingLaunchConfigurationDetails:
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AssociatePublicIpAddress' }})
    block_device_mappings: Optional[List[awsautoscalinglaunchconfigurationblockdevicemappingsdetails.AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockDeviceMappings' }})
    classic_link_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClassicLinkVpcId' }})
    classic_link_vpc_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ClassicLinkVpcSecurityGroups' }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CreatedTime' }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsOptimized' }})
    iam_instance_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'IamInstanceProfile' }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ImageId' }})
    instance_monitoring: Optional[awsautoscalinglaunchconfigurationinstancemonitoringdetails.AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceMonitoring' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    kernel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KernelId' }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'KeyName' }})
    launch_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LaunchConfigurationName' }})
    placement_tenancy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'PlacementTenancy' }})
    ramdisk_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RamdiskId' }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SecurityGroups' }})
    spot_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SpotPrice' }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'UserData' }})
    
