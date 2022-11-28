from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetInterfacePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetInterfaceRequest:
    path_params: GetInterfacePathParams = field()
    

@dataclass
class GetInterfaceResponse:
    content_type: str = field()
    status_code: int = field()
    get_interface_200_application_json_string: Optional[str] = field(default=None)
    
