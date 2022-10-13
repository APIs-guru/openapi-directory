from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import clientgateway


@dataclass_json
@dataclass
class ListClientGatewaysResponse:
    client_gateways: Optional[List[clientgateway.ClientGateway]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'clientGateways' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
