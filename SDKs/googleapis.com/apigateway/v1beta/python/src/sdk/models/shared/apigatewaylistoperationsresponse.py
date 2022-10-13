from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from . import apigatewayoperation


@dataclass_json
@dataclass
class ApigatewayListOperationsResponse:
    next_page_token: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'nextPageToken' }})
    operations: Optional[List[apigatewayoperation.ApigatewayOperation]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'operations' }})
    
