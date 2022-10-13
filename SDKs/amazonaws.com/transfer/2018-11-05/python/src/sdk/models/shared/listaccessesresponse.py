from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listedaccess


@dataclass_json
@dataclass
class ListAccessesResponse:
    accesses: List[listedaccess.ListedAccess] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Accesses' }})
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    server_id: str = field(default=None, metadata={'dataclasses_json': { 'field_name': 'ServerId' }})
    
