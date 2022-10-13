from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySetupConfigGetFinancialYearResponse:
    content_type: str = field(default=None)
    financial_year_dto: Optional[shared.FinancialYearDto] = field(default=None)
    status_code: int = field(default=None)
    
