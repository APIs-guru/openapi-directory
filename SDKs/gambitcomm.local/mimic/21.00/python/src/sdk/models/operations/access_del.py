from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessDelPathParams:
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessDelRequest:
    path_params: AccessDelPathParams = field(default=None)
    

@dataclass
class AccessDelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_del_200_application_json_string: Optional[str] = field(default=None)
    
