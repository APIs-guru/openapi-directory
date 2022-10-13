from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import appgateway


@dataclass_json
@dataclass
class ListAppGatewaysResponse:
    app_gateways: Optional[List[appgateway.AppGateway]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'appGateways' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachable' }})
    
