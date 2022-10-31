from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PingUserHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PingUserRequest:
    headers: PingUserHeaders = field(default=None)
    

@dataclass
class PingUserResponse:
    body: bytes = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    ping_user_200_text_plain_string: Optional[str] = field(default=None)
    
