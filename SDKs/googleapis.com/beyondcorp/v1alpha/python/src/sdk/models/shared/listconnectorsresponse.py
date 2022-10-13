from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connector


@dataclass_json
@dataclass
class ListConnectorsResponse:
    connectors: Optional[List[connector.Connector]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectors' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
