from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetLicenseInformationResponse:
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    license_info: Optional[shared.LicenseInfo] = field(default=None)
    
