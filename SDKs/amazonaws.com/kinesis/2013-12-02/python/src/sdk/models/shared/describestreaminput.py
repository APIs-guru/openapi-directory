from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DescribeStreamInput:
    exclusive_start_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartShardId' }})
    limit: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Limit' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
