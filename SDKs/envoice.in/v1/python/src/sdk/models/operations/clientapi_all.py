from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ClientAPIAllHeaders:
    x_auth_key: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-key' }})
    x_auth_secret: str = field(default=None, metadata={'header': { 'field_name': 'x-auth-secret' }})
    

@dataclass
class ClientAPIAllRequest:
    headers: ClientAPIAllHeaders = field(default=None)
    

@dataclass
class ClientAPIAllResponse:
    body: bytes = field(default=None)
    client_details_api_models: Optional[List[shared.ClientDetailsAPIModel]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
