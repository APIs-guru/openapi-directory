from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClientAPICanDeleteQueryParams:
    id: int = field(metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class ClientAPICanDeleteHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClientAPICanDeleteRequest:
    headers: ClientAPICanDeleteHeaders = field()
    query_params: ClientAPICanDeleteQueryParams = field()
    

@dataclass
class ClientAPICanDeleteResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    client_api_can_delete_200_application_json_boolean: Optional[bool] = field(default=None)
    client_api_can_delete_200_text_json_boolean: Optional[bool] = field(default=None)
    
