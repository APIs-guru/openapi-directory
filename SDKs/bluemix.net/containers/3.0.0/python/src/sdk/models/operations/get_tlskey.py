from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTlskeyHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetTlskeyRequest:
    headers: GetTlskeyHeaders = field()
    

@dataclass
class GetTlskeyResponse:
    content_type: str = field()
    status_code: int = field()
    certificate: Optional[shared.Certificate] = field(default=None)
    
