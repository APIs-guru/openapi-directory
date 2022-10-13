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
    api_core_dto_groups_group: Optional[shared.APICoreDtoGroupsGroup] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
