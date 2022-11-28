from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteContainersGroupsNameOrIDPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContainersGroupsNameOrIDQueryParams:
    force: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContainersGroupsNameOrIDRequest:
    headers: DeleteContainersGroupsNameOrIDHeaders = field()
    path_params: DeleteContainersGroupsNameOrIDPathParams = field()
    query_params: DeleteContainersGroupsNameOrIDQueryParams = field()
    

@dataclass
class DeleteContainersGroupsNameOrIDResponse:
    content_type: str = field()
    status_code: int = field()
    
