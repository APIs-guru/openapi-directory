from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetTypeStatsPathParams:
    type: str = field(metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetTypeStatsRequest:
    path_params: EnterpriseAdminGetTypeStatsPathParams = field()
    

@dataclass
class EnterpriseAdminGetTypeStatsResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_admin_get_type_stats_200_application_json_any_of: Optional[Any] = field(default=None)
    
