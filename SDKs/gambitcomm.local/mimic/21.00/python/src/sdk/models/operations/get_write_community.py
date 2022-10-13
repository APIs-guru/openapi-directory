from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWriteCommunityPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWriteCommunityRequest:
    path_params: GetWriteCommunityPathParams = field(default=None)
    

@dataclass
class GetWriteCommunityResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_write_community_200_application_json_string: Optional[str] = field(default=None)
    
