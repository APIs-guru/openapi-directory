from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class RequestOAuthClientsQueryParams:
    filter: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'filter', 'style': 'form', 'explode': True }})
    sort: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'sort', 'style': 'form', 'explode': True }})
    

@dataclass
class RequestOAuthClientsHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class RequestOAuthClientsRequest:
    headers: RequestOAuthClientsHeaders = field()
    query_params: RequestOAuthClientsQueryParams = field()
    

@dataclass
class RequestOAuthClientsResponse:
    content_type: str = field()
    status_code: int = field()
    error_response: Optional[shared.ErrorResponse] = field(default=None)
    o_auth_clients: Optional[List[shared.OAuthClient]] = field(default=None)
    
