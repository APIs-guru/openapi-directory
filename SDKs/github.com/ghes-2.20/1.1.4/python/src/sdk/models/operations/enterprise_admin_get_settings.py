from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetSettingsResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    enterprise_settings: Optional[shared.EnterpriseSettings] = field(default=None)
    
