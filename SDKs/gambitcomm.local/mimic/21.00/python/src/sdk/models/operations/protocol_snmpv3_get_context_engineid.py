from dataclasses import dataclass, field
from typing import Optional


@dataclass
class ProtocolSnmpv3GetContextEngineidPathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3GetContextEngineidRequest:
    path_params: ProtocolSnmpv3GetContextEngineidPathParams = field()
    

@dataclass
class ProtocolSnmpv3GetContextEngineidResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_get_context_engineid_200_application_json_string: Optional[str] = field(default=None)
    
