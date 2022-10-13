from dataclasses import dataclass, field
from typing import Optional
from sdk.models import shared


@dataclass
class CompanySetupConfigGetResponse:
    company_setup_config_view_model: Optional[shared.CompanySetupConfigViewModel] = field(default=None)
    content_type: str = field(default=None)
    status_code: int = field(default=None)
    
