from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolGetConfigPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    prot: str = field(default=None, metadata={'path_param': { 'field_name': 'prot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolGetConfigRequest:
    path_params: ProtocolGetConfigPathParams = field(default=None)
    

@dataclass
class ProtocolGetConfigResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_get_config_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
