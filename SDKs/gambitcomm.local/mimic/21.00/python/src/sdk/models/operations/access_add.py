from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AccessAddPathParams:
    agents: str = field(default=None, metadata={'path_param': { 'field_name': 'agents', 'style': 'simple', 'explode': False }})
    mask: str = field(default=None, metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    user: str = field(default=None, metadata={'path_param': { 'field_name': 'user', 'style': 'simple', 'explode': False }})
    

@dataclass
class AccessAddRequest:
    path_params: AccessAddPathParams = field(default=None)
    

@dataclass
class AccessAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    access_add_200_application_json_string: Optional[str] = field(default=None)
    
