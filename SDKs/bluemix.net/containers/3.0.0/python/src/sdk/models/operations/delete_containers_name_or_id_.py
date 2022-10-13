from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteContainersNameOrIDPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContainersNameOrIDQueryParams:
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteContainersNameOrIDHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id' }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token' }})
    

@dataclass
class DeleteContainersNameOrIDRequest:
    path_params: DeleteContainersNameOrIDPathParams = field(default=None)
    query_params: DeleteContainersNameOrIDQueryParams = field(default=None)
    headers: DeleteContainersNameOrIDHeaders = field(default=None)
    

@dataclass
class DeleteContainersNameOrIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
