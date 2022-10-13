from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetGroupsNameJSONPathParams:
    name: str = field(default=None, metadata={'path_param': { 'field_name': 'name', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetGroupsNameJSONRequest:
    path_params: GetGroupsNameJSONPathParams = field(default=None)
    

@dataclass
class GetGroupsNameJSONResponse:
    content_type: str = field(default=None)
    get_groups_name_json_200_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
