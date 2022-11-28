from dataclasses import dataclass, field
from typing import Any,List,Optional
from sdk.models import shared


@dataclass
class HealthCheckSecurity:
    user_key: shared.SchemeUserKey = field(metadata={'security': { 'scheme': True, 'type': 'apiKey', 'sub_type': 'header' }})
    

@dataclass
class HealthCheckRequest:
    security: HealthCheckSecurity = field()
    

@dataclass
class HealthCheckResponse:
    content_type: str = field()
    status_code: int = field()
    health_check_200_application_json_anies: Optional[List[Any]] = field(default=None)
    health_check_default_application_json_any: Optional[Any] = field(default=None)
    
