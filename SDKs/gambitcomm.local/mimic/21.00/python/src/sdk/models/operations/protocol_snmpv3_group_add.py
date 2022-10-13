from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GroupAddPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    group_name: str = field(default=None, metadata={'path_param': { 'field_name': 'groupName', 'style': 'simple', 'explode': False }})
    security_model: str = field(default=None, metadata={'path_param': { 'field_name': 'securityModel', 'style': 'simple', 'explode': False }})
    security_name: str = field(default=None, metadata={'path_param': { 'field_name': 'securityName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GroupAddRequest:
    path_params: ProtocolSnmpv3GroupAddPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GroupAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_group_add_200_application_json_string: Optional[str] = field(default=None)
    
