from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk import utils
from . import *


@dataclass_json
@dataclass
class GetExportSnapshotRecordsResult:
    export_snapshot_records: Optional[List[ExportSnapshotRecord]] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('exportSnapshotRecords') }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'letter_case': utils.field_name('nextPageToken') }})
    
