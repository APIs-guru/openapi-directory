from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import snapshotdetails


@dataclass_json
@dataclass
class ListApplicationSnapshotsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    snapshot_summaries: Optional[List[snapshotdetails.SnapshotDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SnapshotSummaries' }})
    
