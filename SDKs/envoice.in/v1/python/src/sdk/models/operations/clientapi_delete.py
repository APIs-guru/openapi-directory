from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class ClientAPIDeleteHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class ClientAPIDeleteRequests:
    application_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'application/xml' }})
    client_delete_api_model: Optional[shared.ClientDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    client_delete_api_model1: Optional[shared.ClientDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    client_delete_api_model2: Optional[shared.ClientDeleteAPIModel] = field(default=None, metadata={'request': { 'media_type': 'text/json' }})
    text_html: bytes = field(default=None, metadata={'request': { 'media_type': 'text/html' }})
    text_xml: bytes = field(default=None, metadata={'request': { 'media_type': 'text/xml' }})
    

@dataclass
class ClientAPIDeleteRequest:
    headers: ClientAPIDeleteHeaders = field(default=None)
    request: ClientAPIDeleteRequests = field(default=None)
    

@dataclass
class ClientAPIDeleteResponse:
    body: bytes = field(default=None)
    client_api_delete_200_application_json_int32_integer: Optional[int] = field(default=None)
    client_api_delete_200_text_json_int32_integer: Optional[int] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
