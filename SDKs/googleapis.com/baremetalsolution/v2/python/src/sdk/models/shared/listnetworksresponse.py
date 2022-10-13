from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import network


@dataclass_json
@dataclass
class ListNetworksResponse:
    networks: Optional[List[network.Network]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'networks' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
