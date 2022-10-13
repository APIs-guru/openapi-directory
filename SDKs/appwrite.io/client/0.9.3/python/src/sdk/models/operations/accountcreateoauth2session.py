from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class AccountCreateOAuth2SessionPathParams:
    provider: str = field(default=None, metadata={'path_param': { 'field_name': 'provider', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccountCreateOAuth2SessionQueryParams:
    failure: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'failure', 'style': 'form', 'explode': True }})
    scopes: Optional[List[str]] = field(default=None, metadata={'query_param': { 'field_name': 'scopes', 'style': 'form', 'explode': True }})
    success: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'success', 'style': 'form', 'explode': True }})
    

@dataclass
class AccountCreateOAuth2SessionSecurity:
    project: shared.SchemeProject = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class AccountCreateOAuth2SessionRequest:
    path_params: AccountCreateOAuth2SessionPathParams = field(default=None)
    query_params: AccountCreateOAuth2SessionQueryParams = field(default=None)
    security: AccountCreateOAuth2SessionSecurity = field(default=None)
    

@dataclass
class AccountCreateOAuth2SessionResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
