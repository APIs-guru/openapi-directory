from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3ViewAddPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    mask: str = field(default=None, metadata={'path_param': { 'field_name': 'mask', 'style': 'simple', 'explode': False }})
    subtree: str = field(default=None, metadata={'path_param': { 'field_name': 'subtree', 'style': 'simple', 'explode': False }})
    view_name: str = field(default=None, metadata={'path_param': { 'field_name': 'viewName', 'style': 'simple', 'explode': False }})
    view_type: str = field(default=None, metadata={'path_param': { 'field_name': 'viewType', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3ViewAddRequest:
    path_params: ProtocolSnmpv3ViewAddPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3ViewAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_view_add_200_application_json_string: Optional[str] = field(default=None)
    
