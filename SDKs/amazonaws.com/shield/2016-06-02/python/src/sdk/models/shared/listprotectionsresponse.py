from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import protection


@dataclass_json
@dataclass
class ListProtectionsResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    protections: Optional[List[protection.Protection]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Protections' }})
    
