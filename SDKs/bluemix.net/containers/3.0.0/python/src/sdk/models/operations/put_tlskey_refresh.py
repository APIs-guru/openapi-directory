from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class PutTlskeyRefreshHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutTlskeyRefreshRequest:
    headers: PutTlskeyRefreshHeaders = field()
    

@dataclass
class PutTlskeyRefreshResponse:
    content_type: str = field()
    status_code: int = field()
    certificate_refresh: Optional[Any] = field(default=None)
    
