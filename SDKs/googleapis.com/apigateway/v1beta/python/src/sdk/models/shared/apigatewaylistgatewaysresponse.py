from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewaygateway


@dataclass_json
@dataclass
class ApigatewayListGatewaysResponse:
    gateways: Optional[List[apigatewaygateway.ApigatewayGateway]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'gateways' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachableLocations' }})
    
