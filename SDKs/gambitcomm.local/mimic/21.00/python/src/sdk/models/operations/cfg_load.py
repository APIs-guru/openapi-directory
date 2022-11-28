from dataclasses import dataclass, field
from typing import Optional


@dataclass
class CfgLoadPathParams:
    cfg_file: str = field(metadata={'path_param': { 'field_name': 'cfgFile', 'style': 'simple', 'explode': False }})
    first_agent_num: int = field(metadata={'path_param': { 'field_name': 'firstAgentNum', 'style': 'simple', 'explode': False }})
    last_agent_num: int = field(metadata={'path_param': { 'field_name': 'lastAgentNum', 'style': 'simple', 'explode': False }})
    start_agent_num: int = field(metadata={'path_param': { 'field_name': 'startAgentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class CfgLoadRequest:
    path_params: CfgLoadPathParams = field()
    

@dataclass
class CfgLoadResponse:
    content_type: str = field()
    status_code: int = field()
    cfg_load_200_application_json_object: Optional[dict[str, int]] = field(default=None)
    
