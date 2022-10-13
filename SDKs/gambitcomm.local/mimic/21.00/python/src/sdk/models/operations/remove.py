from dataclasses import dataclass, field
from typing import Optional


@dataclass
class RemovePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = field(default=None, metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class RemoveRequest:
    path_params: RemovePathParams = field(default=None)
    

@dataclass
class RemoveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    remove_200_application_json_string: Optional[str] = field(default=None)
    
