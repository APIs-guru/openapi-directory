from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetTlskeyHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetTlskeyRequest:
    headers: GetTlskeyHeaders = field(default=None)
    

@dataclass
class GetTlskeyResponse:
    certificate: Optional[shared.Certificate] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
