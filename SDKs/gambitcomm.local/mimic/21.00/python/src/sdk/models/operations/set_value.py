from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetValuePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = field(default=None, metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    variable: str = field(default=None, metadata={'path_param': { 'field_name': 'variable', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetValueRequest:
    path_params: SetValuePathParams = field(default=None)
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class SetValueResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_value_200_application_json_string: Optional[str] = field(default=None)
    
