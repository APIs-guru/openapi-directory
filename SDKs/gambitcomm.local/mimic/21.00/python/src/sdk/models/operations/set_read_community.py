from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetReadCommunityPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    read: str = field(default=None, metadata={'path_param': { 'field_name': 'read', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetReadCommunityRequest:
    path_params: SetReadCommunityPathParams = field(default=None)
    

@dataclass
class SetReadCommunityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_read_community_200_application_json_string: Optional[str] = field(default=None)
    
