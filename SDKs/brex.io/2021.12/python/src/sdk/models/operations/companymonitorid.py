from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyMonitorIDPathParams:
    id: str = field(default=None, metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyMonitorIDSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorIDRequest:
    path_params: CompanyMonitorIDPathParams = field(default=None)
    security: CompanyMonitorIDSecurity = field(default=None)
    

@dataclass
class CompanyMonitorIDResponse:
    company_monitor_id_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_monitor_id_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
