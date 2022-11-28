from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetGroupsNameJSONPathParams:
    name: str = field(metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupsNameJSONRequest:
    path_params: GetGroupsNameJSONPathParams = field()
    

@dataclass
class GetGroupsNameJSONResponse:
    content_type: str = field()
    status_code: int = field()
    get_groups_name_json_200_application_json_any: Optional[Any] = field(default=None)
    
