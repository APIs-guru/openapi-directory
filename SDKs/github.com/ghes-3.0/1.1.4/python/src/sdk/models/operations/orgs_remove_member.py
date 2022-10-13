from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class OrgsRemoveMemberPathParams:
    org: str = field(default=None, metadata={'path_param': { 'field_name': 'org', 'style': 'simple', 'explode': False }})
    username: str = field(default=None, metadata={'path_param': { 'field_name': 'username', 'style': 'simple', 'explode': False }})
    

@dataclass
class OrgsRemoveMemberRequest:
    path_params: OrgsRemoveMemberPathParams = field(default=None)
    

@dataclass
class OrgsRemoveMemberResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    basic_error: Optional[shared.BasicError] = field(default=None)
    
