from dataclasses import dataclass, field
from typing import List,Optional


@dataclass
class ProtocolSnmpv3VacmSavePathParams:
    agent_num: int = field(metadata={'path_param': { 'field_name': 'agentNum', 'style': 'simple', 'explode': False }})
    

@dataclass
class ProtocolSnmpv3VacmSaveRequest:
    path_params: ProtocolSnmpv3VacmSavePathParams = field()
    

@dataclass
class ProtocolSnmpv3VacmSaveResponse:
    content_type: str = field()
    status_code: int = field()
    protocol_snmpv3_vacm_save_200_application_json_strings: Optional[List[str]] = field(default=None)
    
