from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class ListInventoryEntriesResult:
    capture_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'CaptureTime' }})
    entries: Optional[List[dict[str, str]]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Entries' }})
    instance_id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'InstanceId' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    schema_version: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'SchemaVersion' }})
    type_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'TypeName' }})
    
