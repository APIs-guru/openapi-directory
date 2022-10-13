from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetInterfacePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interface: str = field(default=None, metadata={'path_param': { 'field_name': 'interface', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetInterfaceRequest:
    path_params: SetInterfacePathParams = field(default=None)
    

@dataclass
class SetInterfaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_interface_200_application_json_string: Optional[str] = field(default=None)
    
