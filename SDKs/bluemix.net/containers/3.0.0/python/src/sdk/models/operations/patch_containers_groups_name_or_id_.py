from dataclasses import dataclass, field
from typing import Any


@dataclass
class PatchContainersGroupsNameOrIDPathParams:
    name_or_id: str = field(metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = field(metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchContainersGroupsNameOrIDRequest:
    headers: PatchContainersGroupsNameOrIDHeaders = field()
    path_params: PatchContainersGroupsNameOrIDPathParams = field()
    request: Any = field(metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchContainersGroupsNameOrIDResponse:
    content_type: str = field()
    status_code: int = field()
    
