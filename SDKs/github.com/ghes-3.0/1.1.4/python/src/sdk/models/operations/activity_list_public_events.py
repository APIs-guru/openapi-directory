from dataclasses import dataclass, field
from typing import List,Optional
from dataclasses_json import dataclass_json
from sdk.models import shared


@dataclass
class ActivityListPublicEventsQueryParams:
    page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'page', 'style': 'form', 'explode': True }})
    per_page: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'per_page', 'style': 'form', 'explode': True }})
    

@dataclass
class ActivityListPublicEventsRequest:
    query_params: ActivityListPublicEventsQueryParams = field(default=None)
    

@dataclass_json
@dataclass
class ActivityListPublicEvents503ApplicationJSON:
    code: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'code' }})
    documentation_url: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'documentation_url' }})
    message: Optional[str] = field(default=None, metadata={'dataclasses_json': { 'field_name': 'message' }})
    

@dataclass
class ActivityListPublicEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    activity_list_public_events_503_application_json_object: Optional[ActivityListPublicEvents503ApplicationJSON] = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    events: Optional[List[shared.Event]] = field(default=None)
    
