from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import administrator


@dataclass_json
@dataclass
class Enterprise:
    administrator: Optional[List[administrator.Administrator]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'administrator' }})
    id: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'id' }})
    name: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'name' }})
    primary_domain: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'primaryDomain' }})
    
