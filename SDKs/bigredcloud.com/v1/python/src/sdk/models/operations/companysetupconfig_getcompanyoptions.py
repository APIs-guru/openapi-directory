from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySetupConfigGetCompanyOptionsResponse:
    content_type: str = field()
    status_code: int = field()
    company_option_dto: Optional[shared.CompanyOptionDto] = field(default=None)
    
