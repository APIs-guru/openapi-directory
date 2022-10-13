from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateRelationalDatabaseSnapshotRequest:
    relational_database_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseName' }})
    relational_database_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'relationalDatabaseSnapshotName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
