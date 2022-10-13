from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import shardconfiguration


@dataclass_json
@dataclass
class ShardDetail:
    configuration: Optional[shardconfiguration.ShardConfiguration] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Configuration' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Name' }})
    size: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Size' }})
    snapshot_creation_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotCreationTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
