from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Optional
from dataclasses_json import dataclass_json
from . import tablereference


@dataclass_json
@dataclass
class SnapshotDefinition:
    base_table_reference: Optional[tablereference.TableReference] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'baseTableReference' }})
    snapshot_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'snapshotTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    
