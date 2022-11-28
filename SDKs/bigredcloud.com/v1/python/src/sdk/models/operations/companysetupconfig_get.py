from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySetupConfigGetResponse:
    content_type: str = field()
    status_code: int = field()
    company_setup_config_view_model: Optional[shared.CompanySetupConfigViewModel] = field(default=None)
    
