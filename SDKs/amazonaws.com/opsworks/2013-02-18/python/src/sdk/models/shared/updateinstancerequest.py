from dataclasses import dataclass, field
from typing import Enum,List,Optional
from dataclasses_json import dataclass_json
from . import architecture_enum
from . import autoscalingtype_enum


@dataclass_json
@dataclass
class UpdateInstanceRequest:
    agent_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AgentVersion' }})
    ami_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AmiId' }})
    architecture: Optional[architecture_enum.ArchitectureEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Architecture' }})
    auto_scaling_type: Optional[autoscalingtype_enum.AutoScalingTypeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'AutoScalingType' }})
    ebs_optimized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'EbsOptimized' }})
    hostname: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Hostname' }})
    install_updates_on_boot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstallUpdatesOnBoot' }})
    instance_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    instance_type: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceType' }})
    layer_ids: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'LayerIds' }})
    os: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Os' }})
    ssh_key_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SshKeyName' }})
    
