from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolIpmiSetAttrPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    attr: str = field(default=None, metadata={'path_param': { 'field_name': 'attr', 'style': 'simple', 'explode': False }})
    value: str = field(default=None, metadata={'path_param': { 'field_name': 'value', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolIpmiSetAttrRequest:
    path_params: ProtocolIpmiSetAttrPathParams = field(default=None)
    

@dataclass
class ProtocolIpmiSetAttrResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_ipmi_set_attr_200_application_json_string: Optional[str] = field(default=None)
    
