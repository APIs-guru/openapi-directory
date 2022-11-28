from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySetupConfigGetFinancialYearResponse:
    content_type: str = field()
    status_code: int = field()
    financial_year_dto: Optional[shared.FinancialYearDto] = field(default=None)
    
