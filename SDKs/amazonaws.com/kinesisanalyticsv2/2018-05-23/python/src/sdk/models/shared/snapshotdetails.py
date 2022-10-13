from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import Enum,Optional
from dataclasses_json import dataclass_json
from . import snapshotstatus_enum


@dataclass_json
@dataclass
class SnapshotDetails:
    application_version_id: int = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ApplicationVersionId' }})
    snapshot_creation_timestamp: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotCreationTimestamp', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotName' }})
    snapshot_status: snapshotstatus_enum.SnapshotStatusEnum = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotStatus' }})
    
