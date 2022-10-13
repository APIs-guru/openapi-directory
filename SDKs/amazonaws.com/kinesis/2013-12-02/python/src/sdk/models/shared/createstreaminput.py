from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class CreateStreamInput:
    shard_count: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardCount' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
