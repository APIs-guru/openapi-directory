from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessDelPathParams:
    user: str = field(metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessDelRequest:
    path_params: AccessDelPathParams = field()
    

@dataclass
class AccessDelResponse:
    content_type: str = field()
    status_code: int = field()
    access_del_200_application_json_string: Optional[str] = field(default=None)
    
