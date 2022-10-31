from dataclasses import dataclass, field
from typing import Any


@dataclass
class PutContainersQuotaHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PutContainersQuotaRequest:
    headers: PutContainersQuotaHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PutContainersQuotaResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
