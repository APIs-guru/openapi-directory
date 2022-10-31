from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class GetVolumesJSONHeaders:
    x_auth_project_id: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Project-Id', 'style': 'simple', 'explode': False }})
    x_auth_token: str = field(default=None, metadata={'header': { 'field_name': 'X-Auth-Token', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVolumesJSONRequest:
    headers: GetVolumesJSONHeaders = field(default=None)
    

@dataclass
class GetVolumesJSONResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    volumes: Optional[List[Any]] = field(default=None)
    
