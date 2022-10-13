from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetVariablesPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = field(default=None, metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = field(default=None, metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVariablesRequest:
    path_params: GetVariablesPathParams = field(default=None)
    

@dataclass
class GetVariablesResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_variables_200_application_json_strings: Optional[List[str]] = field(default=None)
    
