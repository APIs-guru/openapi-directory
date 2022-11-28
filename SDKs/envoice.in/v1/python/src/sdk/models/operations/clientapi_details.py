from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ClientAPIDetailsQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class ClientAPIDetailsHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClientAPIDetailsRequest:
    headers: ClientAPIDetailsHeaders = field()
    query_params: ClientAPIDetailsQueryParams = field()
    

@dataclass
class ClientAPIDetailsResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    client_details_api_model: Optional[shared.ClientDetailsAPIModel] = field(default=None)
    
