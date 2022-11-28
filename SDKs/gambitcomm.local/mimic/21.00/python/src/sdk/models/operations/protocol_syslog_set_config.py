from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSyslogSetConfigPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    argument: str = field(metadata={'path_param': { 'field_name': 'argument', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogSetConfigRequest:
    path_params: ProtocolSyslogSetConfigPathParams = field()
    

@dataclass
class ProtocolSyslogSetConfigResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_syslog_set_config_200_application_json_string: Optional[str] = field(default=None)
    
