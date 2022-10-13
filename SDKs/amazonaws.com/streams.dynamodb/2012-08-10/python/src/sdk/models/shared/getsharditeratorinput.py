from dataclasses import dataclass, field
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharditeratortype_enum


@dataclass_json
@dataclass
class GetShardIteratorInput:
    sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SequenceNumber' }})
    shard_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    shard_iterator_type: sharditeratortype_enum.ShardIteratorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardIteratorType' }})
    stream_arn: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamArn' }})
    
