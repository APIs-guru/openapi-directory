from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetSettingsResponse:
    content_type: str = field()
    status_code: int = field()
    enterprise_settings: Optional[shared.EnterpriseSettings] = field(default=None)
    
