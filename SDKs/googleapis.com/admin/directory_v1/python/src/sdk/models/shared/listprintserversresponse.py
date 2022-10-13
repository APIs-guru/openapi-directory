from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import printserver


@dataclass_json
@dataclass
class ListPrintServersResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    print_servers: Optional[List[printserver.PrintServer]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'printServers' }})
    
