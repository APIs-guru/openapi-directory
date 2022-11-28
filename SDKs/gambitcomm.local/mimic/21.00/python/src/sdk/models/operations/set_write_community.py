from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetWriteCommunityPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    write: str = field(metadata={'path_param': { 'field_name': 'write', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetWriteCommunityRequest:
    path_params: SetWriteCommunityPathParams = field()
    

@dataclass
class SetWriteCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    set_write_community_200_application_json_string: Optional[str] = field(default=None)
    
