from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AddIpaliasPathParams:
    ip: str = field(metadata={'path_param': { 'field_name': 'IP', 'style': 'simple', 'explode': False }})
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interface: str = field(metadata={'path_param': { 'field_name': 'interface', 'style': 'simple', 'explode': False }})
    mask: str = field(metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    port: int = field(metadata={'path_param': { 'field_name': 'port', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddIpaliasRequest:
    path_params: AddIpaliasPathParams = field()
    

@dataclass
class AddIpaliasResponse:
    content_type: str = field()
    status_code: int = field()
    add_ipalias_200_application_json_string: Optional[str] = field(default=None)
    
