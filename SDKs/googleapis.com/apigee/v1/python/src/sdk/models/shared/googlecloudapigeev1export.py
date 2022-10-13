from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class GoogleCloudApigeeV1Export:
    created: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'created' }})
    datastore_name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'datastoreName' }})
    description: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'description' }})
    error: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'error' }})
    execution_time: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'executionTime' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    self: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'self' }})
    state: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'state' }})
    updated: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'updated' }})
    
