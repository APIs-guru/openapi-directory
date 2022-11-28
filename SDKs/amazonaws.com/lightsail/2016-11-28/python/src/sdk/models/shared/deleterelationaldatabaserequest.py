from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from sdk import utils


@dataclass_json
@dataclass
class DeleteRelationalDatabaseRequest:
    relational_database_name: str = field(metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseName') }})
    final_relational_database_snapshot_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('finalRelationalDatabaseSnapshotName') }})
    skip_final_snapshot: Optional[bool] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('skipFinalSnapshot') }})
    
