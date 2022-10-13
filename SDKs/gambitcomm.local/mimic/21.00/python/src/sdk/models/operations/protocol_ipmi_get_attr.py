from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolIpmiGetAttrPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetAttrRequest:
    path_params: ProtocolIpmiGetAttrPathParams = field(default=None)
    

@dataclass
class ProtocolIpmiGetAttrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_ipmi_get_attr_200_application_json_string: Optional[str] = field(default=None)
    
