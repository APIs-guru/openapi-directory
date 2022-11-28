from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetInterfacePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    interface: str = field(metadata={'path_param': { 'field_name': 'interface', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetInterfaceRequest:
    path_params: SetInterfacePathParams = field()
    

@dataclass
class SetInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    set_interface_200_application_json_string: Optional[str] = field(default=None)
    
