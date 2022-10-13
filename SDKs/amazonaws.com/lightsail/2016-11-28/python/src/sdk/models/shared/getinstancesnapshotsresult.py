from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import instancesnapshot


@dataclass_json
@dataclass
class GetInstanceSnapshotsResult:
    instance_snapshots: Optional[List[instancesnapshot.InstanceSnapshot]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSnapshots' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
