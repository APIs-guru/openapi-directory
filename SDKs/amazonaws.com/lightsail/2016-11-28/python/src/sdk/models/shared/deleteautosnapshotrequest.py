from dataclasses import dataclass, field
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class DeleteAutoSnapshotRequest:
    date: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'date' }})
    resource_name: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resourceName' }})
    
