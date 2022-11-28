from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class GetGroupsIDPathParams:
    id: int = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupsIDRequest:
    path_params: GetGroupsIDPathParams = field()
    

@dataclass
class GetGroupsIDResponse:
    content_type: str = field()
    status_code: int = field()
    api_core_dto_groups_group: Optional[shared.APICoreDtoGroupsGroup] = field(default=None)
    
