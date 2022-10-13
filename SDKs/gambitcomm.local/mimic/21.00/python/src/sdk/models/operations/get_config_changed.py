from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetConfigChangedPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetConfigChangedRequest:
    path_params: GetConfigChangedPathParams = field(default=None)
    

@dataclass
class GetConfigChangedResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_config_changed_200_application_json_int32_integer: Optional[int] = field(default=None)
    
