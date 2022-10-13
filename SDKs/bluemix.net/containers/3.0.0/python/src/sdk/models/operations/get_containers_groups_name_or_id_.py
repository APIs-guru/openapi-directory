from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersGroupsNameOrIDPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class GetContainersGroupsNameOrIDRequest:
    path_params: GetContainersGroupsNameOrIDPathParams = field(default=None)
    headers: GetContainersGroupsNameOrIDHeaders = field(default=None)
    

@dataclass
class GetContainersGroupsNameOrIDResponse:
    containers_groups_name_or_id_get_details: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
