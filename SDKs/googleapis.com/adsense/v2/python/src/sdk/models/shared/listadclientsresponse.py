from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import adclient


@dataclass_json
@dataclass
class ListAdClientsResponse:
    ad_clients: Optional[List[adclient.AdClient]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'adClients' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    
