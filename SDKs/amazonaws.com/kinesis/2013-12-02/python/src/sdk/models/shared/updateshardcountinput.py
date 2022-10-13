from dataclasses import dataclass, field
from typing import Enum
from dataclasses_json import dataclass_json
from . import scalingtype_enum


@dataclass_json
@dataclass
class UpdateShardCountInput:
    scaling_type: scalingtype_enum.ScalingTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ScalingType' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    target_shard_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetShardCount' }})
    
