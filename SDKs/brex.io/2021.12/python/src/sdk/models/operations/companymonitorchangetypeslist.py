from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class CompanyMonitorChangeTypesListSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class CompanyMonitorChangeTypesListRequest:
    security: CompanyMonitorChangeTypesListSecurity = field(default=None)
    

@dataclass
class CompanyMonitorChangeTypesListResponse:
    company_monitor_change_types_list_200_application_json_strings: Optional[List[str]] = field(default=None)
    company_monitor_change_types_list_default_application_json_any: Optional[Any] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
