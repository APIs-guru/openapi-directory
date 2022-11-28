from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsAutoScalingLaunchConfigurationDetails:
    r"""AwsAutoScalingLaunchConfigurationDetails
    Details about a launch configuration.
    """
    
    associate_public_ip_address: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AssociatePublicIpAddress') }})
    block_device_mappings: Optional[List[AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockDeviceMappings') }})
    classic_link_vpc_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClassicLinkVpcId') }})
    classic_link_vpc_security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ClassicLinkVpcSecurityGroups') }})
    created_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('CreatedTime') }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    iam_instance_profile: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('IamInstanceProfile') }})
    image_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('ImageId') }})
    instance_monitoring: Optional[AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceMonitoring') }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    kernel_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KernelId') }})
    key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('KeyName') }})
    launch_configuration_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('LaunchConfigurationName') }})
    placement_tenancy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('PlacementTenancy') }})
    ramdisk_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RamdiskId') }})
    security_groups: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SecurityGroups') }})
    spot_price: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SpotPrice') }})
    user_data: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('UserData') }})
    
