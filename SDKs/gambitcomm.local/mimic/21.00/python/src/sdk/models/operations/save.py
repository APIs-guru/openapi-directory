from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SavePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class SaveRequest:
    path_params: SavePathParams = field()
    

@dataclass
class SaveResponse:
    content_type: str = field()
    status_code: int = field()
    save_200_application_json_string: Optional[str] = field(default=None)
    
