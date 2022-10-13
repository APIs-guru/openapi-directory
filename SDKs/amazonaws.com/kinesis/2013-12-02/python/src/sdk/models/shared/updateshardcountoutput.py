from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class UpdateShardCountOutput:
    current_shard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CurrentShardCount' }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    target_shard_count: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TargetShardCount' }})
    
