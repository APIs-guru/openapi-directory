from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetConfigurationStatusResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    configuration_status: Optional[shared.ConfigurationStatus] = field(default=None)
    
