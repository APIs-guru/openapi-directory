from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class StopRelationalDatabaseRequest:
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    relational_database_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSnapshotName' }})
    
