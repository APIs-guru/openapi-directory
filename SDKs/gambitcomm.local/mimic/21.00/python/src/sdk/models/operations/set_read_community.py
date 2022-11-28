from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetReadCommunityPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    read: str = field(metadata={'path_param': { 'field_name': 'read', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetReadCommunityRequest:
    path_params: SetReadCommunityPathParams = field()
    

@dataclass
class SetReadCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    set_read_community_200_application_json_string: Optional[str] = field(default=None)
    
