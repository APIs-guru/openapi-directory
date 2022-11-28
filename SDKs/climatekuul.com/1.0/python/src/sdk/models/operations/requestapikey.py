from dataclasses import dataclass, field
from typing import Optional


REQUEST_API_KEY_SERVERS = [
	"http://api.climatekuul.com:8000/footprint",
]


@dataclass
class RequestAPIKeyRequestBody:
    api_key_l1: str = field(metadata={'form': { 'field_name': 'apiKey_l1' }})
    api_key_l2: str = field(metadata={'form': { 'field_name': 'apiKey_l2' }})
    email: str = field(metadata={'form': { 'field_name': 'email' }})
    password: int = field(metadata={'form': { 'field_name': 'password' }})
    user_first_name: str = field(metadata={'form': { 'field_name': 'userFirstName' }})
    user_last_name: str = field(metadata={'form': { 'field_name': 'userLastName' }})
    

@dataclass
class RequestAPIKeyRequest:
    request: Optional[RequestAPIKeyRequestBody] = field(default=None, metadata={'request': { 'media_type': 'application/x-www-form-urlencoded' }})
    server_url: Optional[str] = field(default=None)
    

@dataclass
class RequestAPIKeyResponse:
    content_type: str = field()
    status_code: int = field()
    
