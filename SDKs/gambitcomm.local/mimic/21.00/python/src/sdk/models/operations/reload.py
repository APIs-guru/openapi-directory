from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ReloadPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ReloadRequest:
    path_params: ReloadPathParams = field()
    

@dataclass
class ReloadResponse:
    content_type: str = field()
    status_code: int = field()
    reload_200_application_json_string: Optional[str] = field(default=None)
    
