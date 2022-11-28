from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3UsmSavePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3UsmSaveRequest:
    path_params: ProtocolSnmpv3UsmSavePathParams = field()
    

@dataclass
class ProtocolSnmpv3UsmSaveResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_usm_save_200_application_json_strings: Optional[List[str]] = field(default=None)
    
