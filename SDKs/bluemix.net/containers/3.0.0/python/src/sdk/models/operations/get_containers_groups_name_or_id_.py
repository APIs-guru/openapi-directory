from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class GetContainersGroupsNameOrIDPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetContainersGroupsNameOrIDRequest:
    headers: GetContainersGroupsNameOrIDHeaders = field()
    path_params: GetContainersGroupsNameOrIDPathParams = field()
    

@dataclass
class GetContainersGroupsNameOrIDResponse:
    content_type: str = field()
    status_code: int = field()
    containers_groups_name_or_id_get_details: Optional[Any] = field(default=None)
    
