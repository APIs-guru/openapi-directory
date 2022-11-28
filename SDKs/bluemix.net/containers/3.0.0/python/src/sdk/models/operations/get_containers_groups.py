from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetContainersGroupsHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersGroupsRequest:
    headers: GetContainersGroupsHeaders = field()
    

@dataclass
class GetContainersGroupsResponse:
    content_type: str = field()
    status_code: int = field()
    containers_groups_get_list_items: Optional[List[Any]] = field(default=None)
    
