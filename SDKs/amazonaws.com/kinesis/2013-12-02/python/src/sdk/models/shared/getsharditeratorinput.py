from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import sharditeratortype_enum


@dataclass_json
@dataclass
class GetShardIteratorInput:
    shard_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    shard_iterator_type: sharditeratortype_enum.ShardIteratorTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardIteratorType' }})
    starting_sequence_number: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StartingSequenceNumber' }})
    stream_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'StreamName' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
