from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsBlockUserPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsBlockUserRequest:
    path_params: OrgsBlockUserPathParams = field(default=None)
    

@dataclass
class OrgsBlockUserResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
