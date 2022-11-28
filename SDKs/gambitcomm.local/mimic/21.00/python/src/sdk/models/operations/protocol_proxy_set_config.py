from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolProxySetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolProxySetConfigRequest:
    path_params: ProtocolProxySetConfigPathParams = field()
    

@dataclass
class ProtocolProxySetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_proxy_set_config_200_application_json_string: Optional[str] = field(default=None)
    
