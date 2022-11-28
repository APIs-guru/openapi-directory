from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class DescribeSnapshotsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('NextToken') }})
    snapshots: Optional[List[Snapshot]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('Snapshots') }})
    
