from dataclasses import dataclass, field
from typing import List,Optional
from sdk.models import shared


@dataclass
class ClientAPIAllHeaders:
    x_auth_key: str = field(metadata={'header': { 'field_name': 'x-auth-key', 'style': 'simple', 'explode': False }})
    x_auth_secret: str = field(metadata={'header': { 'field_name': 'x-auth-secret', 'style': 'simple', 'explode': False }})
    

@dataclass
class ClientAPIAllRequest:
    headers: ClientAPIAllHeaders = field()
    

@dataclass
class ClientAPIAllResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    client_details_api_models: Optional[List[shared.ClientDetailsAPIModel]] = field(default=None)
    
