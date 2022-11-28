from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GroupV2GetGroupByNamePathParams:
    group_name: str = field(metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    group_type: int = field(metadata={'path_param': { 'field_name': 'groupType', 'style': 'simple', 'explode': False }})
    

@dataclass
class GroupV2GetGroupByNameRequest:
    path_params: GroupV2GetGroupByNamePathParams = field()
    

@dataclass
class GroupV2GetGroupByNameResponse:
    content_type: str = field()
    status_code: int = field()
    body: Optional[bytes] = field(default=None)
    
