from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetOwnerPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetOwnerRequest:
    path_params: GetOwnerPathParams = field(default=None)
    

@dataclass
class GetOwnerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_owner_200_application_json_string: Optional[str] = field(default=None)
    
