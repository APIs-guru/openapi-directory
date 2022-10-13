from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ClientAPIDetailsQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class ClientAPIDetailsHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class ClientAPIDetailsRequest:
    query_params: ClientAPIDetailsQueryParams = field(default=None)
    headers: ClientAPIDetailsHeaders = field(default=None)
    

@dataclass
class ClientAPIDetailsResponse:
    body: bytes = field(default=None)
    client_details_api_model: Optional[shared.ClientDetailsAPIModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
