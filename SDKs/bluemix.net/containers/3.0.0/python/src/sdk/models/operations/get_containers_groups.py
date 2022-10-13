from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetContainersGroupsHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetContainersGroupsRequest:
    headers: GetContainersGroupsHeaders = field(default=None)
    

@dataclass
class GetContainersGroupsResponse:
    containers_groups_get_list_items: Optional[List[Any]] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
