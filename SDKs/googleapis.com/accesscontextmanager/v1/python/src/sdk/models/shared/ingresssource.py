from dataclasses import dataclass, field
from typing import Optional
from dataclasses_json import dataclass_json


@dataclass_json
@dataclass
class IngressSource:
    access_level: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'accessLevel' }})
    resource: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'resource' }})
    
