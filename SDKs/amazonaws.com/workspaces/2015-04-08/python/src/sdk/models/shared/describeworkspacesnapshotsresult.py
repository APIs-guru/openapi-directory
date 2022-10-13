from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import snapshot
from . import snapshot


@dataclass_json
@dataclass
class DescribeWorkspaceSnapshotsResult:
    rebuild_snapshots: Optional[List[snapshot.Snapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RebuildSnapshots' }})
    restore_snapshots: Optional[List[snapshot.Snapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'RestoreSnapshots' }})
    
