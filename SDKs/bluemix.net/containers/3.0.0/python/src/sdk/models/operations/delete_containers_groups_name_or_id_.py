from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteContainersGroupsNameOrIDPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContainersGroupsNameOrIDQueryParams:
    force: Optional[str] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class DeleteContainersGroupsNameOrIDRequest:
    path_params: DeleteContainersGroupsNameOrIDPathParams = field(default=None)
    query_params: DeleteContainersGroupsNameOrIDQueryParams = field(default=None)
    headers: DeleteContainersGroupsNameOrIDHeaders = field(default=None)
    

@dataclass
class DeleteContainersGroupsNameOrIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
