from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSyslogGetAttrPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogGetAttrRequest:
    path_params: ProtocolSyslogGetAttrPathParams = field(default=None)
    

@dataclass
class ProtocolSyslogGetAttrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_syslog_get_attr_200_application_json_string: Optional[str] = field(default=None)
    
