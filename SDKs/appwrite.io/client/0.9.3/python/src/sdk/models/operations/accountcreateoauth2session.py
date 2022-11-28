from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class AccountCreateOAuth2SessionPathParams:
    provider: str = field(metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountCreateOAuth2SessionQueryParams:
    failure: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'failure', 'style': 'form', 'explode': True }})
    scopes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'scopes', 'style': 'form', 'explode': True }})
    success: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'success', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountCreateOAuth2SessionSecurity:
    project: shared.SchemeProject = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateOAuth2SessionRequest:
    path_params: AccountCreateOAuth2SessionPathParams = field()
    query_params: AccountCreateOAuth2SessionQueryParams = field()
    security: AccountCreateOAuth2SessionSecurity = field()
    

@dataclass
class AccountCreateOAuth2SessionResponse:
    content_type: str = field()
    status_code: int = field()
    
