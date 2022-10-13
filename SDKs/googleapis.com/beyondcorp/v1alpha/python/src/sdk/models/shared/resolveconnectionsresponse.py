from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import connectiondetails


@dataclass_json
@dataclass
class ResolveConnectionsResponse:
    connection_details: Optional[List[connectiondetails.ConnectionDetails]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'connectionDetails' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
