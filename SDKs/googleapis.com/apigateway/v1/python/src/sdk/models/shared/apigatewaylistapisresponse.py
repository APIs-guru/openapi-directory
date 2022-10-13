from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewayapi


@dataclass_json
@dataclass
class ApigatewayListApisResponse:
    apis: Optional[List[apigatewayapi.ApigatewayAPI]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'apis' }})
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    unreachable_locations: Optional[List[str]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'unreachableLocations' }})
    
