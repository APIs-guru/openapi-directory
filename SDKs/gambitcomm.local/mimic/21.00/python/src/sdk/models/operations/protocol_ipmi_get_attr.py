from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolIpmiGetAttrPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiGetAttrRequest:
    path_params: ProtocolIpmiGetAttrPathParams = field()
    

@dataclass
class ProtocolIpmiGetAttrResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_ipmi_get_attr_200_application_json_string: Optional[str] = field(default=None)
    
