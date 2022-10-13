from dataclasses import dataclass, field
from datetime import datetime
from marshmallow import fields
import dateutil.parser
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateRelationalDatabaseFromSnapshotRequest:
    availability_zone: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'availabilityZone' }})
    publicly_accessible: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'publiclyAccessible' }})
    relational_database_bundle_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseBundleId' }})
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    relational_database_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSnapshotName' }})
    restore_time: Optional[datetime] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'restoreTime', 'encoder': datetime.isoformat, 'decoder': dateutil.parser.isoparse, 'mm_field': fields.DateTime(format='iso') }})
    source_relational_database_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sourceRelationalDatabaseName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    use_latest_restorable_time: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'useLatestRestorableTime' }})
    
