from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyMonitorListSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorListRequest:
    security: CompanyMonitorListSecurity = field()
    

@dataclass
class CompanyMonitorListResponse:
    content_type: str = field()
    status_code: int = field()
    company_monitor_list_200_application_json_anies: Optional[List[Any]] = field(default=None)
    company_monitor_list_default_application_json_any: Optional[Any] = field(default=None)
    
