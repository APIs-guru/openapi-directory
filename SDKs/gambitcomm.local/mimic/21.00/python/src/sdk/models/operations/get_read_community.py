from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReadCommunityPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReadCommunityRequest:
    path_params: GetReadCommunityPathParams = field(default=None)
    

@dataclass
class GetReadCommunityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_read_community_200_application_json_string: Optional[str] = field(default=None)
    
