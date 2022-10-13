from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CfgNewPathParams:
    first_agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'firstAgentNum', 'style': 'simple', 'explode': False }})
    last_agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'lastAgentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class CfgNewRequest:
    path_params: CfgNewPathParams = field(default=None)
    

@dataclass
class CfgNewResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    cfg_new_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
