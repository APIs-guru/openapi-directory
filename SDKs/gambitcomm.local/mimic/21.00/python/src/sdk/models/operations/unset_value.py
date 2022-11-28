from dataclasses import dataclass, field
from typing import Optional


@dataclass
class UnsetValuePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    variable: str = field(metadata={'path_param': { 'field_name': 'variable', 'style': 'simple', 'explode': False }})
    

@dataclass
class UnsetValueRequest:
    path_params: UnsetValuePathParams = field()
    

@dataclass
class UnsetValueResponse:
    content_type: str = field()
    status_code: int = field()
    unset_value_200_application_json_string: Optional[str] = field(default=None)
    
