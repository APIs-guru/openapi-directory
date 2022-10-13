from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupsIDPathParams:
    id: int = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupsIDRequest:
    path_params: GetGroupsIDPathParams = field(default=None)
    

@dataclass
class GetGroupsIDResponse:
    content_type: str = field(default=None)
    group_entity: Optional[shared.GroupEntity] = field(default=None)
    status_code: int = field(default=None)
    
