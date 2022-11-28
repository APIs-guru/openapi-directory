from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetGroupPathParams:
    group_id: int = field(metadata={'path_param': { 'field_name': 'groupId', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupRequest:
    path_params: GroupV2GetGroupPathParams = field()
    

@dataclass
class GroupV2GetGroupResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
