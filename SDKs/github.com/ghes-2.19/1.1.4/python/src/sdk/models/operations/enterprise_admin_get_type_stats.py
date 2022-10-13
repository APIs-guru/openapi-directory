from dataclasses import dataclass, field
from typing import Any,Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetTypeStatsPathParams:
    type: str = field(default=None, metadata={'path_param': { 'field_name': 'type', 'style': 'simple', 'explode': False }})
    

@dataclass
class EnterpriseAdminGetTypeStatsRequest:
    path_params: EnterpriseAdminGetTypeStatsPathParams = field(default=None)
    

@dataclass
class EnterpriseAdminGetTypeStatsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_admin_get_type_stats_200_application_json_any_of: Optional[Any] = field(default=None)
    
