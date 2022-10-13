from dataclasses import dataclass, field
from typing import Any,List,Optional


@dataclass
class HealthCheckSecurity:
    user_key: shared.SchemeUserKey = field(default=None, metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthCheckRequest:
    security: HealthCheckSecurity = field(default=None)
    

@dataclass
class HealthCheckResponse:
    content_type: str = field(default=None)
    health_check_200_application_json_anies: Optional[List[Any]] = field(default=None)
    health_check_default_application_json_any: Optional[Any] = field(default=None)
    status_code: int = field(default=None)
    
