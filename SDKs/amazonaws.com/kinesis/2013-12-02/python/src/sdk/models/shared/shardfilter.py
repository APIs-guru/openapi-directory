from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import shardfiltertype_enum


@dataclass_json
@dataclass
class ShardFilter:
    shard_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ShardId' }})
    timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Timestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    type: shardfiltertype_enum.ShardFilterTypeEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Type' }})
    
