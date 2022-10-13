from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails


@dataclass_json
@dataclass
class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails:
    device_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'DeviceName' }})
    ebs: Optional[awsautoscalinglaunchconfigurationblockdevicemappingsebsdetails.AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Ebs' }})
    no_device: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NoDevice' }})
    virtual_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VirtualName' }})
    
