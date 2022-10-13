from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SavePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SaveRequest:
    path_params: SavePathParams = field(default=None)
    

@dataclass
class SaveResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    save_200_application_json_string: Optional[str] = field(default=None)
    
