from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3ViewDelPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    view_name: str = field(default=None, metadata={'path_param': { 'field_name': 'viewName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3ViewDelRequest:
    path_params: ProtocolSnmpv3ViewDelPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3ViewDelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_view_del_200_application_json_string: Optional[str] = field(default=None)
    
