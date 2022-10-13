from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewayapiconfig


@dataclass_json
@dataclass
class ApigatewayListAPIConfigsResponse:
    api_configs: Optional[List[apigatewayapiconfig.ApigatewayAPIConfig]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apiConfigs' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachableLocations' }})
    
