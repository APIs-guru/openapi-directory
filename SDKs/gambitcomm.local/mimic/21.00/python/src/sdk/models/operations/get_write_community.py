from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetWriteCommunityPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetWriteCommunityRequest:
    path_params: GetWriteCommunityPathParams = field()
    

@dataclass
class GetWriteCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    get_write_community_200_application_json_string: Optional[str] = field(default=None)
    
