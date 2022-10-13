from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class RepositoryPreReceiveHook:
    configuration_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'configuration_url' }})
    enforcement: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'enforcement' }})
    id: Optional[int] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    
