from dataclasses import dataclass, field
from typing import Optional


@dataclass
class AgentStoreLreplacePathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    index: int = field(default=None, metadata={'path_param': { 'field_name': 'index', 'style': 'simple', 'explode': False }})
    var: str = field(default=None, metadata={'path_param': { 'field_name': 'var', 'style': 'simple', 'explode': False }})
    

@dataclass
class AgentStoreLreplaceRequest:
    path_params: AgentStoreLreplacePathParams = field(default=None)
    request: Optional[str] = field(default=None, metadata={'request': { 'media_type': 'application/json' }})
    

@dataclass
class AgentStoreLreplaceResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    agent_store_lreplace_200_application_json_string: Optional[str] = field(default=None)
    
