from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class ListApplicationSnapshotsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    snapshot_summaries: Optional[List[SnapshotDetails]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('SnapshotSummaries') }})
    
