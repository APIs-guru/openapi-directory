from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetRelationalDatabaseSnapshotsResult:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    relational_database_snapshots: Optional[List[RelationalDatabaseSnapshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('relationalDatabaseSnapshots') }})
    
