from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetServerBlocklistAccountsQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServerBlocklistAccountsSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetServerBlocklistAccountsRequest:
    query_params: GetServerBlocklistAccountsQueryParams = field(default=None)
    security: GetServerBlocklistAccountsSecurity = field(default=None)
    

@dataclass
class GetServerBlocklistAccountsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
