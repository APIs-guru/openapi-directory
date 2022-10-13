from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import shardfilter


@dataclass_json
@dataclass
class ListShardsInput:
    exclusive_start_shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ExclusiveStartShardId' }})
    max_results: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'MaxResults' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    shard_filter: Optional[shardfilter.ShardFilter] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardFilter' }})
    stream_creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamCreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    stream_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    
