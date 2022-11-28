from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class GetVariablesPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    instance: str = field(metadata={'path_param': { 'field_name': 'instance', 'style': 'simple', 'explode': False }})
    object: str = field(metadata={'path_param': { 'field_name': 'object', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetVariablesRequest:
    path_params: GetVariablesPathParams = field()
    

@dataclass
class GetVariablesResponse:
    content_type: str = field()
    status_code: int = field()
    get_variables_200_application_json_strings: Optional[List[str]] = field(default=None)
    
