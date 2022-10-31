from dataclasses import dataclass, field
from typing import Any


@dataclass
class PatchContainersGroupsNameOrIDPathParams:
    name_or_id: str = field(default=None, metadata={'path_param': { 'field_name': 'name_or_id', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchContainersGroupsNameOrIDHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class PatchContainersGroupsNameOrIDRequest:
    path_params: PatchContainersGroupsNameOrIDPathParams = field(default=None)
    headers: PatchContainersGroupsNameOrIDHeaders = field(default=None)
    request: Any = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class PatchContainersGroupsNameOrIDResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
