from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class CompanyMonitorChangeTypesListSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorChangeTypesListRequest:
    security: CompanyMonitorChangeTypesListSecurity = field()
    

@dataclass
class CompanyMonitorChangeTypesListResponse:
    content_type: str = field()
    status_code: int = field()
    company_monitor_change_types_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    company_monitor_change_types_list_default_application_json_any: Optional[Any] = field(default=None)
    
