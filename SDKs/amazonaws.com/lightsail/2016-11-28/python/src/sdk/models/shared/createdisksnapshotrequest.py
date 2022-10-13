from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import tag


@dataclass_json
@dataclass
class CreateDiskSnapshotRequest:
    disk_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskName' }})
    disk_snapshot_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'diskSnapshotName' }})
    instance_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceName' }})
    tags: Optional[List[tag.Tag]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'tags' }})
    
