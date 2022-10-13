from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetOwnerPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    owner: str = field(default=None, metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetOwnerRequest:
    path_params: SetOwnerPathParams = field(default=None)
    

@dataclass
class SetOwnerResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    set_owner_200_application_json_string: Optional[str] = field(default=None)
    
