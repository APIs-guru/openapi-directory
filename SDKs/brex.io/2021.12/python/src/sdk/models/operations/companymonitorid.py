from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyMonitorIDPathParams:
    id: str = field(metadata={'path_param': { 'field_name': 'id', 'style': 'simple', 'explode': False }})
    

@dataclass
class CompanyMonitorIDSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorIDRequest:
    path_params: CompanyMonitorIDPathParams = field()
    security: CompanyMonitorIDSecurity = field()
    

@dataclass
class CompanyMonitorIDResponse:
    content_type: str = field()
    status_code: int = field()
    company_monitor_id_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_monitor_id_default_application_json_any: Optional[Any] = field(default=None)
    
