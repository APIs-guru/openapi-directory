from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSyslogSetAttrPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    value: str = field(metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSyslogSetAttrRequest:
    path_params: ProtocolSyslogSetAttrPathParams = field()
    

@dataclass
class ProtocolSyslogSetAttrResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_syslog_set_attr_200_application_json_string: Optional[str] = field(default=None)
    
