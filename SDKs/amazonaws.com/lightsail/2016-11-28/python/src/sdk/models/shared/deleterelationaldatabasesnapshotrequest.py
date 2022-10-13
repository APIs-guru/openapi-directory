from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteRelationalDatabaseSnapshotRequest:
    relational_database_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSnapshotName' }})
    
