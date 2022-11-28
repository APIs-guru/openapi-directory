from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHookEventsSecurity:
    api_key: Optional[shared.SchemeAPIKey] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    basic: Optional[shared.SchemeBasic] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    oauth2: Optional[shared.SchemeOauth2] = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetHookEventsRequest:
    security: GetHookEventsSecurity = field()
    

@dataclass
class GetHookEventsResponse:
    content_type: str = field()
    status_code: int = field()
    subject_types: Optional[shared.SubjectTypes] = field(default=None)
    
