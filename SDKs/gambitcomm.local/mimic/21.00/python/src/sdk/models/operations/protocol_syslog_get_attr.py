from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSyslogGetAttrPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetAttrRequest:
    path_params: ProtocolSyslogGetAttrPathParams = field()
    

@dataclass
class ProtocolSyslogGetAttrResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_syslog_get_attr_200_application_json_string: Optional[str] = field(default=None)
    
