from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetReadCommunityPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetReadCommunityRequest:
    path_params: GetReadCommunityPathParams = field()
    

@dataclass
class GetReadCommunityResponse:
    content_type: str = field()
    status_code: int = field()
    get_read_community_200_application_json_string: Optional[str] = field(default=None)
    
