from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GetEngineidPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetEngineidRequest:
    path_params: ProtocolSnmpv3GetEngineidPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3GetEngineidResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_get_engineid_200_application_json_string: Optional[str] = field(default=None)
    
