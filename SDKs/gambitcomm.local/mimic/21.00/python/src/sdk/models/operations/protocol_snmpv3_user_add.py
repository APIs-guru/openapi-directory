from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3UserAddPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    auth_key: str = field(default=None, metadata={'path_param': { 'field_name': 'authKey', 'style': 'simple', 'explode': False }})
    auth_protocol: str = field(default=None, metadata={'path_param': { 'field_name': 'authProtocol', 'style': 'simple', 'explode': False }})
    priv_key: str = field(default=None, metadata={'path_param': { 'field_name': 'privKey', 'style': 'simple', 'explode': False }})
    priv_protocol: str = field(default=None, metadata={'path_param': { 'field_name': 'privProtocol', 'style': 'simple', 'explode': False }})
    security_name: str = field(default=None, metadata={'path_param': { 'field_name': 'securityName', 'style': 'simple', 'explode': False }})
    user_name: str = field(default=None, metadata={'path_param': { 'field_name': 'userName', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3UserAddRequest:
    path_params: ProtocolSnmpv3UserAddPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3UserAddResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_user_add_200_application_json_string: Optional[str] = field(default=None)
    
