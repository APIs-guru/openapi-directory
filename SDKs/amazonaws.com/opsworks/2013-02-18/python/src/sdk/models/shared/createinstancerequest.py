from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import architecture_enum
from . import autoscalingtype_enum
from . import blockdevicemapping
from . import rootdevicetype_enum


@dataclass_json
@dataclass
class CreateInstanceRequest:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentVersion' }})
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiId' }})
    architecture: Optional[architecture_enum.ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Architecture' }})
    auto_scaling_type: Optional[autoscalingtype_enum.AutoScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingType' }})
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AvailabilityZone' }})
    block_device_mappings: Optional[List[blockdevicemapping.BlockDeviceMapping]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'BlockDeviceMappings' }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsOptimized' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hostname' }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstallUpdatesOnBoot' }})
    instance_type: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    layer_ids: List[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerIds' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Os' }})
    root_device_type: Optional[rootdevicetype_enum.RootDeviceTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RootDeviceType' }})
    ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshKeyName' }})
    stack_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StackId' }})
    subnet_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SubnetId' }})
    tenancy: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Tenancy' }})
    virtualization_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'VirtualizationType' }})
    
