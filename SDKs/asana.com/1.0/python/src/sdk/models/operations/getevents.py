from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class GetEventsQueryParams:
    opt_fields: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'opt_fields', 'style': 'form', 'explode': False }})
    opt_pretty: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'opt_pretty', 'style': 'form', 'explode': True }})
    resource: str = field(default=None, metadata={'query_param': { 'field_name': 'resource', 'style': 'form', 'explode': True }})
    sync: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sync', 'style': 'form', 'explode': True }})
    

@dataclass
class GetEventsRequest:
    query_params: GetEventsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class GetEvents200ApplicationJSON:
    data: Optional[List[shared.EventResponse]] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'data' }})
    sync: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'sync' }})
    

@dataclass
class GetEventsResponse:
    content_type: str = field(default=None)
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    status_code: int = field(default=None)
    get_events_200_application_json_object: Optional[GetEvents200ApplicationJSON] = field(default=None)
    
