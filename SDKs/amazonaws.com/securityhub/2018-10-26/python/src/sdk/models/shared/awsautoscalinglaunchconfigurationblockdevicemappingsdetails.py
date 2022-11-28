from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails:
    r"""AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
    A block device for the instance.
    """
    
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('DeviceName') }})
    ebs: Optional[AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Ebs') }})
    no_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NoDevice') }})
    virtual_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualName') }})
    
