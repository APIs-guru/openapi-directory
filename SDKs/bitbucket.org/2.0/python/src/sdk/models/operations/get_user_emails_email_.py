from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetUserEmailsEmailPathParams:
    email: str = field(default=None, metadata={'path_param': { 'field_name': 'email', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetUserEmailsEmailSecurityOption1:
    oauth2: shared.SchemeOauth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetUserEmailsEmailSecurityOption2:
    basic: shared.SchemeBasic = field(default=None, metadata={'security': { 'scheme': True, 'type': 'http', 'sub_type': 'basic' }})
    

@dataclass
class GetUserEmailsEmailSecurityOption3:
    api_key: shared.SchemeAPIKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class GetUserEmailsEmailSecurity:
    option1: Optional[GetUserEmailsEmailSecurityOption1] = field(default=None, metadata={'security': { 'option': True }})
    option2: Optional[GetUserEmailsEmailSecurityOption2] = field(default=None, metadata={'security': { 'option': True }})
    option3: Optional[GetUserEmailsEmailSecurityOption3] = field(default=None, metadata={'security': { 'option': True }})
    

@dataclass
class GetUserEmailsEmailRequest:
    path_params: GetUserEmailsEmailPathParams = field(default=None)
    security: GetUserEmailsEmailSecurity = field(default=None)
    

@dataclass
class GetUserEmailsEmailResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    error: Optional[dict[str, Any]] = field(default=None)
    
