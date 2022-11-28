from dataclasses import dataclass, field
from typing import Optional


@dataclass
class DeleteContainersNameOrIDPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContainersNameOrIDQueryParams:
    force: Optional[bool] = field(default=None, metadata={'query_param': { 'field_name': 'force', 'style': 'form', 'explode': True }})
    

@dataclass
class DeleteContainersNameOrIDHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class DeleteContainersNameOrIDRequest:
    headers: DeleteContainersNameOrIDHeaders = field()
    path_params: DeleteContainersNameOrIDPathParams = field()
    query_params: DeleteContainersNameOrIDQueryParams = field()
    

@dataclass
class DeleteContainersNameOrIDResponse:
    content_type: str = field()
    status_code: int = field()
    
