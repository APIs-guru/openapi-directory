from dataclasses import dataclass, field
from datetime import date, datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from enum import Enum
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class CreateInstanceRequest:
    instance_type: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstanceType') }})
    layer_ids: List[str] = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('LayerIds') }})
    stack_id: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('StackId') }})
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AgentVersion') }})
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AmiId') }})
    architecture: Optional[ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Architecture') }})
    auto_scaling_type: Optional[AutoScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AutoScalingType') }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('AvailabilityZone') }})
    block_device_mappings: Optional[List[BlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('BlockDeviceMappings') }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('EbsOptimized') }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Hostname') }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('InstallUpdatesOnBoot') }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Os') }})
    root_device_type: Optional[RootDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('RootDeviceType') }})
    ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SshKeyName') }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SubnetId') }})
    tenancy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Tenancy') }})
    virtualization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('VirtualizationType') }})
    
