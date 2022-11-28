from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsRemoveMemberPathParams:
    org: str = field(metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemoveMemberRequest:
    path_params: OrgsRemoveMemberPathParams = field()
    

@dataclass
class OrgsRemoveMemberResponse:
    content_type: str = field()
    status_code: int = field()
    basic_error: Optional[shared.BasicError] = field(default=None)
    
