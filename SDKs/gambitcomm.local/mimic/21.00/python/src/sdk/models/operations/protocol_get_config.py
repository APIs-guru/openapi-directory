from dataclasses import dataclass, field
from typing import Any,Optional


@dataclass
class ProtocolGetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    prot: str = field(metadata={'path_param': { 'field_name': 'prot', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolGetConfigRequest:
    path_params: ProtocolGetConfigPathParams = field()
    

@dataclass
class ProtocolGetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_get_config_200_application_json_object: Optional[dict[str, Any]] = field(default=None)
    
