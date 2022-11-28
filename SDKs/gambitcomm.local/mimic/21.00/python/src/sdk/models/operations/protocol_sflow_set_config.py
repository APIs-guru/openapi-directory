from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSflowSetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSflowSetConfigRequest:
    path_params: ProtocolSflowSetConfigPathParams = field()
    

@dataclass
class ProtocolSflowSetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_sflow_set_config_200_application_json_string: Optional[str] = field(default=None)
    
