from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetServerBlocklistServersQueryParams:
    count: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'count', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    start: Optional[int] = field(default=None, metadata={'query_param': { 'field_name': 'start', 'style': 'form', 'explode': True }})
    

@dataclass
class GetServerBlocklistServersSecurity:
    o_auth2: shared.SchemeOAuth2 = field(default=None, metadata={'security': { 'scheme': True, 'type': 'oauth2' }})
    

@dataclass
class GetServerBlocklistServersRequest:
    query_params: GetServerBlocklistServersQueryParams = field(default=None)
    security: GetServerBlocklistServersSecurity = field(default=None)
    

@dataclass
class GetServerBlocklistServersResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
