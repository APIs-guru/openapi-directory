from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import channellatencymode_enum


@dataclass_json
@dataclass
class ChannelSummary:
    arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'arn' }})
    authorized: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'authorized' }})
    latency_mode: Optional[channellatencymode_enum.ChannelLatencyModeEnum] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'latencyMode' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    recording_configuration_arn: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'recordingConfigurationArn' }})
    tags: Optional[dict[str, str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
