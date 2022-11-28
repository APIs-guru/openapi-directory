from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class PepMonitorListSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class PepMonitorListRequest:
    security: PepMonitorListSecurity = field()
    

@dataclass
class PepMonitorListResponse:
    content_type: str = field()
    status_code: int = field()
    pep_monitor_list_200_application_json_anies: Optional[List[Any]] = field(default=None)
    pep_monitor_list_default_application_json_any: Optional[Any] = field(default=None)
    
