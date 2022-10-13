from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserEmailsSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserEmailsSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserEmailsSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserEmailsSecurity:
    option1: Optional[GetUserEmailsSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserEmailsSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserEmailsSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserEmailsRequest:
    security: GetUserEmailsSecurity = field(default=None)
    

@dataclass
class GetUserEmailsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
