from dataclasses import dataclass, field
from typing import Optional


@dataclass
class PingUserHeaders:
    x_sds_auth_token: Optional[str] = field(default=None, metadata={'header': { 'field_name': 'X-Sds-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PingUserRequest:
    headers: PingUserHeaders = field()
    

@dataclass
class PingUserResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    ping_user_200_text_plain_string: Optional[str] = field(default=None)
    
