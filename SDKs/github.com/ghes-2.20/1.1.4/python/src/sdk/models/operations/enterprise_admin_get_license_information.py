from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class EnterpriseAdminGetLicenseInformationResponse:
    content_type: str = field()
    status_code: int = field()
    license_info: Optional[shared.LicenseInfo] = field(default=None)
    
