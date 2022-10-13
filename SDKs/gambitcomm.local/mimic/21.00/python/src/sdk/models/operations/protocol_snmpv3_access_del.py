from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3AccessDelPathParams:
    access_name: str = field(default=None, metadata={'path_param': { 'field_name': 'accessName', 'style': 'simple', 'explode': False }})
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3AccessDelRequest:
    path_params: ProtocolSnmpv3AccessDelPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3AccessDelResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_access_del_200_application_json_string: Optional[str] = field(default=None)
    
