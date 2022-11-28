from dataclasses import dataclass, field
from typing import Optional


@dataclass
class SetOwnerPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    owner: str = field(metadata={'path_param': { 'field_name': 'owner', 'style': 'simple', 'explode': False }})
    

@dataclass
class SetOwnerRequest:
    path_params: SetOwnerPathParams = field()
    

@dataclass
class SetOwnerResponse:
    content_type: str = field()
    status_code: int = field()
    set_owner_200_application_json_string: Optional[str] = field(default=None)
    
