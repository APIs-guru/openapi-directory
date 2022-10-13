from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import relationaldatabasesnapshot


@dataclass_json
@dataclass
class GetRelationalDatabaseSnapshotResult:
    relational_database_snapshot: Optional[relationaldatabasesnapshot.RelationalDatabaseSnapshot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSnapshot' }})
    
