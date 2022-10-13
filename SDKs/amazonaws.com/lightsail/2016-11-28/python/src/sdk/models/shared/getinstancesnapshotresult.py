from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json
from . import instancesnapshot


@dataclass_json
@dataclass
class GetInstanceSnapshotResult:
    instance_snapshot: Optional[instancesnapshot.InstanceSnapshot] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'instanceSnapshot' }})
    
