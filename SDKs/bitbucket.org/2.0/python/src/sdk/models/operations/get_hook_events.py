from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetHookEventsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetHookEventsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetHookEventsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetHookEventsSecurity:
    option1: Optional[GetHookEventsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetHookEventsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetHookEventsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetHookEventsRequest:
    security: GetHookEventsSecurity = field(default=None)
    

@dataclass
class GetHookEventsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    subject_types: Optional[shared.SubjectTypes] = field(default=None)
    
