from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import privilege


@dataclass_json
@dataclass
class Privileges:
    etag: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'etag' }})
    items: Optional[List[privilege.Privilege]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'items' }})
    kind: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'kind' }})
    
