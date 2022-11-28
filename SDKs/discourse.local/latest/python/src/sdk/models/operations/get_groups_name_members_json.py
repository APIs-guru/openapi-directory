from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetGroupsNameMembersJSONPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupsNameMembersJSONRequest:
    path_params: GetGroupsNameMembersJSONPathParams = field()
    

@dataclass
class GetGroupsNameMembersJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_groups_name_members_json_200_application_json_any: Optional[Any] = field(default=None)
    
