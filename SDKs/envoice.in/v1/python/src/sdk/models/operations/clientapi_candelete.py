from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ClientAPICanDeleteQueryParams:
    id: int = field(default=None, metadata={'query_param': { 'field_name': 'id', 'style': 'form', 'explode': True }})
    

@dataclass
class ClientAPICanDeleteHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClientAPICanDeleteRequest:
    query_params: ClientAPICanDeleteQueryParams = field(default=None)
    headers: ClientAPICanDeleteHeaders = field(default=None)
    

@dataclass
class ClientAPICanDeleteResponse:
    body: bytes = field(default=None)
    client_api_can_delete_200_application_json_boolean: Optional[bool] = field(default=None)
    client_api_can_delete_200_text_json_boolean: Optional[bool] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
