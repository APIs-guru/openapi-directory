from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateInstanceSnapshotRequest:
    instance_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    instance_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSnapshotName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
