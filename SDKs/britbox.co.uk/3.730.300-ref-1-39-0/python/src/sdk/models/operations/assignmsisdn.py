from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class AssignMsisdnQueryParams:
    lang: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'lang', 'style': 'form', 'explode': True }})
    

@dataclass
class AssignMsisdnSecurity:
    account_auth: shared.SchemeAccountAuth = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class AssignMsisdnRequest:
    query_params: AssignMsisdnQueryParams = field(default=None)
    request: shared.ItvAssignMsisdnRequest = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    security: AssignMsisdnSecurity = field(default=None)
    

@dataclass
class AssignMsisdnResponse:
    content_type: str = field(default=None)
    service_error: Optional[shared.ServiceError] = field(default=None)
    status_code: int = field(default=None)
    
