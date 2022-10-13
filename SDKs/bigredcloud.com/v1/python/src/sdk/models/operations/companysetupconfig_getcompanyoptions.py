from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySetupConfigGetCompanyOptionsResponse:
    company_option_dto: Optional[shared.CompanyOptionDto] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
