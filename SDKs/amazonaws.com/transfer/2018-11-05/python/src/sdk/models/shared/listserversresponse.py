from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import listedserver


@dataclass_json
@dataclass
class ListServersResponse:
    next_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'NextToken' }})
    servers: List[listedserver.ListedServer] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'Servers' }})
    
