from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AssignTokenQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class AssignTokenSecurity:
    account_auth: shared.SchemeAccountAuth = field(metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignTokenRequest:
    query_params: AssignTokenQueryParams = field()
    request: shared.ItvAssignBtTokenRequest = field(metadata={'request': { 'media_type': 'application/json' }})
    security: AssignTokenSecurity = field()
    

@dataclass
class AssignTokenResponse:
    content_type: str = field()
    status_code: int = field()
    service_error: Optional[shared.ServiceError] = field(default=None)
    
