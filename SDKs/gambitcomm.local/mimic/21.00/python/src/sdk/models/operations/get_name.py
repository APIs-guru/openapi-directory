from dataclasses import dataclass, field
from typing import Optional


@dataclass
class GetNamePathParams:
    oid: str = field(default=None, metadata={'path_param': { 'field_name': 'OID', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class GetNameRequest:
    path_params: GetNamePathParams = field(default=None)
    

@dataclass
class GetNameResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    get_name_200_application_json_string: Optional[str] = field(default=None)
    
