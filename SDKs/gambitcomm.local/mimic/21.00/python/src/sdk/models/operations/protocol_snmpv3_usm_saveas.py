from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3UsmSaveasPathParams:
    agent_num: int = field(default=None, metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    filename: str = field(default=None, metadata={'path_param': { 'field_name': 'filename', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3UsmSaveasRequest:
    path_params: ProtocolSnmpv3UsmSaveasPathParams = field(default=None)
    

@dataclass
class ProtocolSnmpv3UsmSaveasResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    protocol_snmpv3_usm_saveas_200_application_json_strings: Optional[List[str]] = field(default=None)
    
