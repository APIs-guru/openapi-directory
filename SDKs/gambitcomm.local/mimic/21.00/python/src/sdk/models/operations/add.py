from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AddPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class AddRequest:
    path_params: AddPathParams = field()
    

@dataclass
class AddResponse:
    content_type: str = field()
    status_code: int = field()
    add_200_application_json_string: Optional[str] = field(default=None)
    
