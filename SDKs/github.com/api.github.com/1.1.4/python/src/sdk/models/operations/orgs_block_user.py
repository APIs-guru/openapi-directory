from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsBlockUserPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsBlockUserRequest:
    path_params: OrgsBlockUserPathParams = field()
    

@dataclass
class OrgsBlockUserResponse:
    content_type: str = field()
    status_code: int = field()
    validation_error: Optional[shared.ValidationError] = field(default=None)
    
