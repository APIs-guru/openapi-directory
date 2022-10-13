from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteApplicationSnapshotRequest:
    application_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationName' }})
    snapshot_creation_timestamp: datetime = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotCreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotName' }})
    
